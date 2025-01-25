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
        <div className="flex-1 flex-col flex w-full gap-y-4">
            <div className="flex flex-col">
                <p className="little-office"><Symbols.Versicle /> Lord, <Symbols /> Thou shalt open my lips.</p>
                <p className="little-office"><Symbols.Response /> And my mouth shall declare Thy praise.</p>
                <p className="little-office"><Symbols.Versicle /> O God <Symbols /> come to my assistance.</p>
                <p className="little-office"><Symbols.Response /> O Lord, make haste to help me.</p>
                <p className="little-office"> Glory be to the Father, and to the Son, and to the Holy Ghost. </p>
                <p className="little-office"> As it was in the beginning, is now, and ever shall be world, without end. Amen. </p>
                {isLent ? <p className="little-office">Praise be to Thee, O Lord, King of glory everlasting.</p> : <p className="little-office">Alleluia.</p>}
            </div>
            <p className="office-title"> INVITATORY </p>
            <div className="flex flex-col">
                <p className="little-office"> Hail, Mary, full of grace, the Lord is with thee </p>
                <p className="little-office"> Hail, Mary, full of grace, the Lord is with thee </p>
            </div>
            <p className="office-title"> PSALM 94 Venite, exultemus </p>
             <div className="flex flex-col">
                 <p className="psalm"> O COME, let us exalt in the Lord; let us rejoice before God our Savior.Let us come into His presence with thanksgiving and rejoice before Him with psalms.</p>
                 <p className="psalm"> </p>
             </div>
            {firstNocturn && <p className="office-title">First Nocturn</p>}
            {secondNocturn && <p>Second Nocturn</p>}
        </div>
  );
};

export default Matins;