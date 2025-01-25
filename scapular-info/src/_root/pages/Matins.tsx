import SeasonSelector from "@/components/shared/SeasonSelector";
import Symbols from "@/components/shared/Symbols";
import { useHoursContext } from "@/context/HoursContext";

const Matins = () => {
    const {
        isLent,       
        isAdvent,     
        isCandlemas,  
        isChristmas,  
        isEaster,     
        firstNocturn, 
        secondNocturn,
        thirdNocturn, 
    } = useHoursContext();

    console.log('Matins rebuild');

    //Classes: little-office red office-title hymn psalm office-instruction

    return (
        <div className="flex-1 flex-col flex w-full">
            <SeasonSelector />
            <h2 className="title">Matins</h2>
            <p className="little-office"><Symbols.Versicle /> Lord, <Symbols /> Thou shalt open my lips.</p>
            <p className="little-office"><Symbols.Response /> And my mouth shall declare Thy praise.</p>
            {isLent ? <p>Praise be to Thee, O Lord, King of glory everlasting.</p> : <p>Alleluia.</p>}
            {firstNocturn && <p className="office-title">First Nocturn</p>}
            {secondNocturn && <p>Second Nocturn</p>}
        </div>
  );
};

export default Matins;