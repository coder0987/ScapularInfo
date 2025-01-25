import Symbols from "@/components/shared/Symbols";
import { useState } from "react";

const Matins = () => {
    const [isLent, setIsLent] = useState(false); //Septuagesima to Easter
    const [isAdvent, setIsAdvent] = useState(false);
    const [isCandlemas, setIsCandlemas] = useState(false);//Candlemas to advent
    const [isChristmas, setIsChristmas] = useState(false);//Christmas to Candlemas
    const [isEaster, setIsEaster] = useState(false);
    const [firstNocturn, setFirstNocturn] = useState(false);
    const [secondNocturn, setSecondNocturn] = useState(false);
    const [thirdNocturn, setThirdNocturn] = useState(false);


    //Classes: little-office red office-title hymn psalm office-instruction

    return (
        <div className="flex-1 flex-col flex w-full">
            <p className="little-office"><Symbols.Versicle /> Lord, <Symbols /> Thou shalt open my lips.</p>
            <p className="little-office"><Symbols.Response /> And my mouth shall declare Thy praise.</p>
            <p className="little-office"><Symbols.Versicle /> O God <Symbols /> come to my assistance.</p>
            <p className="little-office"><Symbols.Response /> O Lord, make haste to help me.</p>
            <p className="little-office"> Glory be,</p>


            {isLent ? <p>Praise be to Thee, O Lord, King of glory everlasting.</p> : <p>Alleluia.</p>}
            {firstNocturn && <p className="office-title">First Nocturn</p>}
            {secondNocturn && <p>Second Nocturn</p>}
        </div>
  );
};

export default Matins;