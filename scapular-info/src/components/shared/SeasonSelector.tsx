import { useHoursContext } from "@/context/HoursContext";
import Switch from "./Switch";
import TimezoneClock from "./TimeZoneClock";
import { useEffect, useState } from "react";



const SeasonSelector = () => {
    const {
            isLent,          setIsLent       ,
            isAdvent,        setIsAdvent     ,
            isCandlemas,     setIsCandlemas  ,
            isChristmas,     setIsChristmas  ,
            isEaster,        setIsEaster     ,
            firstNocturn,    setFirstNocturn ,
            secondNocturn,   setSecondNocturn,
            thirdNocturn,    setThirdNocturn ,
            isLeader    ,    setIsLeader     ,
            leadChoir   ,    setLeadChoir    ,
            followChoir ,    setFollowChoir  ,
            readerOne   ,    setReaderOne    ,
            readerTwo   ,    setReaderTwo    ,
        } = useHoursContext();

        
        const [timeZone, setTimeZone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);

        function updateLiturgicalHours() {
            const today = new Date();

            // Use Intl.DateTimeFormat to adjust today's date to the selected timeZone
            const options = {timeZone: timeZone,hour: '2-digit',minute: '2-digit',second: '2-digit',hour12: true,};
            const formattedDate = new Intl.DateTimeFormat('en-US', options).format(today);

            // Create a new Date object for the selected timeZone
            const adjustedDate = new Date(`${today.toLocaleDateString()} ${formattedDate}`);

            // Now you can get the correct values for the adjusted timezone
            const currentDay = adjustedDate.getDay(); // 0 (Sunday) to 6 (Saturday)
            const currentYear = adjustedDate.getFullYear();
            const currentHour = adjustedDate.getHours();

            console.log(currentHour);
        
            // Helper function to calculate Easter date
            function getEasterDate(year : number) {
                const a = year % 19;
                const b = Math.floor(year / 100);
                const c = year % 100;
                const d = Math.floor(b / 4);
                const e = b % 4;
                const f = Math.floor((b + 8) / 25);
                const g = Math.floor((b - f + 1) / 3);
                const h = (19 * a + b - d - g + 15) % 30;
                const i = Math.floor(c / 4);
                const k = c % 4;
                const l = (32 + 2 * e + 2 * i - h - k) % 7;
                const m = Math.floor((a + 11 * h + 22 * l) / 451);
                const month = Math.floor((h + l - 7 * m + 114) / 31);
                const day = ((h + l - 7 * m + 114) % 31) + 1;
        
                return new Date(year, month - 1, day);
            }
        
            // Helper function to find the Sunday before a given date
            function getSundayBefore(date : Date) {
                const day = date.getDay();
                const diff = day === 0 ? 0 : 7 - day; // Get difference from Sunday (0)
                const sunday = new Date(date);
                sunday.setDate(date.getDate() - diff);
                return sunday;
            }
        
            // Helper function to check if current date is in range
            function isDateInRange(date : Date, startDate : Date, endDate : Date) {
                return date >= startDate && date <= endDate;
            }
        
            // Septuagesima (approximately 70 days before Easter)
            const easterDate = getEasterDate(currentYear);
            const septuagesimaDate = new Date(easterDate);
            septuagesimaDate.setDate(easterDate.getDate() - 70); // 70 days before Easter
        
            // Holy Saturday (the day before Easter)
            const holySaturday = new Date(easterDate);
            holySaturday.setDate(easterDate.getDate() - 1);
        
            setIsLent(isDateInRange(today, septuagesimaDate, holySaturday));
        
            // Advent (First Sunday of Advent to Christmas Eve)
            const november30 = new Date(currentYear, 10, 30); // November 30th (St. Andrew's Day)
            const firstSundayOfAdvent = getSundayBefore(november30);
            const adventStart = firstSundayOfAdvent;
            const adventEnd = new Date(currentYear, 11, 24); // December 24th (Christmas Eve)
        
            setIsAdvent(isDateInRange(today, adventStart, adventEnd));
        
            // Christmas (from Christmas Day to Candlemas)
            const christmasStart = new Date(currentYear - 1, 11, 25); // Christmas Day
            const candlemasStart = new Date(currentYear, 1, 2); // February 2nd (Candlemas)
            setIsChristmas(isDateInRange(today, christmasStart, candlemasStart));
        
            // Candlemas (from Candlemas to the Saturday before Advent)
            const candlemasEnd = new Date(adventStart);
            candlemasEnd.setDate(adventStart.getDate() - 1); // Subtract one day to get the Saturday before Advent
            setIsCandlemas(isDateInRange(today, candlemasStart, candlemasEnd));
        
            // Easter (from Easter Sunday to Trinity Eve)
            const trinityEve = new Date(easterDate);
            trinityEve.setMonth(easterDate.getMonth() + 2); // Trinity Eve is 2 months after Easter
            setIsEaster(isDateInRange(today, easterDate, trinityEve));

            if (currentHour >= 20) {
                //After 8PM
                // First Nocturn (Sundays, Mondays, Thursdays, and after 8PM the night before)
                const nocturnTimes = [6, 0, 3]; // Sunday (0), Monday (1), Thursday (4)
                setFirstNocturn(nocturnTimes.includes(currentDay));

                // Second Nocturn (Tuesdays and Fridays)
                const secondNocturnTimes = [1, 4]; // Tuesday (2), Friday (5)
                setSecondNocturn(secondNocturnTimes.includes(currentDay));

                // Third Nocturn (Wednesdays and Saturdays)
                const thirdNocturnTimes = [2, 5]; // Wednesday (3), Saturday (6)
                setThirdNocturn(thirdNocturnTimes.includes(currentDay));
            } else {
                // First Nocturn (Sundays, Mondays, Thursdays, and after 8PM the night before)
                const nocturnTimes = [0, 1, 4]; // Sunday (0), Monday (1), Thursday (4)
                setFirstNocturn(nocturnTimes.includes(currentDay));
            
                // Second Nocturn (Tuesdays and Fridays)
                const secondNocturnTimes = [2, 5]; // Tuesday (2), Friday (5)
                setSecondNocturn(secondNocturnTimes.includes(currentDay));
            
                // Third Nocturn (Wednesdays and Saturdays)
                const thirdNocturnTimes = [3, 6]; // Wednesday (3), Saturday (6)
                setThirdNocturn(thirdNocturnTimes.includes(currentDay));
            }
        }

        useEffect(() => {
            updateLiturgicalHours();
          }, [timeZone]);

        
    const [solo, setSolo] = useState(true);

    function changeLeader(s: Boolean) {
        if (s) {
            setIsLeader(true);
            setLeadChoir(true);
        } else {
            setIsLeader(false);
        }
    }

    function changeLeaderChoir(s : Boolean) {
        if (s) {
            setLeadChoir(true);
        } else {
            setIsLeader(false);
            setLeadChoir(false);
        }
    }

    function changeSolo(s : Boolean) {
        if (s) {
            setSolo(true);
            setIsLeader(true);
            setLeadChoir(true);
            setFollowChoir(true);
            setReaderOne(true);
            setReaderTwo(true);
        } else {
            setSolo(false);
        }
    }

    return (
        <div className="flex-1 flex-col flex w-full">
            <TimezoneClock timeZone={timeZone} setTimeZone={setTimeZone} />
            {/* */}
            <Switch label="Lent" value={isLent      }  setValue={setIsLent       } />
            <Switch label="Advent" value={isAdvent    }  setValue={setIsAdvent     } />
            <Switch label="Candlemas" value={isCandlemas }  setValue={setIsCandlemas  } />
            <Switch label="Christmas" value={isChristmas }  setValue={setIsChristmas  } />
            <Switch label="Easter" value={isEaster    }  setValue={setIsEaster     } />
            <Switch label="First Nocturn " value={firstNocturn}  setValue={setFirstNocturn } />
            <Switch label="Second Nocturn" value={secondNocturn} setValue={setSecondNocturn} />
            <Switch label="Third Nocturn" value={thirdNocturn}  setValue={setThirdNocturn } />
            
            <Switch label="Pray Alone" value={solo}  setValue={changeSolo } />
            {!solo && <>
                <Switch label="Lead"             value={isLeader}      setValue={changeLeader     } />
                <Switch label="Leader's Choir"   value={leadChoir}     setValue={changeLeaderChoir} />
                <Switch label="Follower's Choir" value={followChoir}   setValue={setFollowChoir   } />
                <Switch label="Reader One"       value={readerOne}     setValue={setReaderOne     } />
                <Switch label="Reader Two"       value={readerTwo}     setValue={setReaderTwo     } />
            </>}
            {/**/}
        </div>
  );
};

export default SeasonSelector;