import { useHoursContext } from "@/context/HoursContext";
import Switch from "./Switch";



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
        } = useHoursContext();

    return (
        <div className="flex-1 flex-col flex w-full">
            <Switch label="Lent" value={isLent      }  setValue={setIsLent       } />
            <Switch label="Advent" value={isAdvent    }  setValue={setIsAdvent     } />
            <Switch label="Candlemas" value={isCandlemas }  setValue={setIsCandlemas  } />
            <Switch label="Christmas" value={isChristmas }  setValue={setIsChristmas  } />
            <Switch label="Easter" value={isEaster    }  setValue={setIsEaster     } />
            <Switch label="First Nocturn " value={firstNocturn}  setValue={setFirstNocturn } />
            <Switch label="Second Nocturn" value={secondNocturn} setValue={setSecondNocturn} />
            <Switch label="Third Nocturn" value={thirdNocturn}  setValue={setThirdNocturn } />
        </div>
  );
};

export default SeasonSelector;