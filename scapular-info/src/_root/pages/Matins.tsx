import ClosingPrayer from "@/components/shared/ClosingPrayer";
import GloriaPatri from "@/components/shared/GloriaPatri";
import OpeningPrayer from "@/components/shared/OpeningPrayer";
import SeasonSelector from "@/components/shared/SeasonSelector";
import Symbols from "@/components/shared/Symbols";
import { useHoursContext } from "@/context/HoursContext";

import Psalm8 from "@/components/psalms/Psalm8";

const Matins = () => {
    const {
        isLent,      
        isPassionTide, 
        isAdvent,     
        isCandlemas,  
        isChristmas,  
        isEaster,     
        firstNocturn, 
        secondNocturn,
        thirdNocturn,
    } = useHoursContext();

    //Classes: little-office red office-title hymn psalm office-instruction

    return (
        <div className="flex-1 flex-col flex w-full gap-y-4">
            <SeasonSelector />
            <OpeningPrayer />
            <p className="office-title"> MATINS </p>
            <p className="office-instruction">Optionally, standing, all may say the Hail Mary in silence</p>
            <p className="office-instruction">Stand, and make the little sign of the Cross on the lips</p> 
            <div className="flex flex-col">
                <p className="little-office"><Symbols.Versicle /> Lord, <Symbols /> Thou shalt open my lips.</p>
                <p className="little-office"><Symbols.Response /> And my mouth shall declare Thy praise.</p>
                <p className="little-office"><Symbols.Versicle /> O God <Symbols /> come to my assistance.</p>
                <p className="little-office"><Symbols.Response /> O Lord, make haste to help me.</p>
                <GloriaPatri />
                {isLent ? <p className="little-office">Praise be to Thee, O Lord, King of glory everlasting.</p> : <p className="little-office">Alleluia.</p>}
            </div>
            <p className="office-title"> INVITATORY </p>
            <div className="flex flex-col items-center">
                <p className="little-office"> Hail, Mary, full of grace, * the Lord is with thee </p>
                <p className="little-office"> Hail, Mary, full of grace, * the Lord is with thee </p>
            </div>
            <p className="office-title"> PSALM 94 Venite, exultemus </p>
            <div className="flex flex-col psalm gap-y-1">
                <p>
                    O COME, let us exalt in the Lord; * let us rejoice before God our Savior.
                </p>
                <p>
                    Let us come into His presence with thanksgiving * and rejoice before Him with psalms.
                </p>
                <p>
                    <Symbols.Invitatory /> Hail, Mary, full of grace, * the Lord is with thee.
                </p>
                <p>
                    For the Lord is a great God, * and a great King above all gods;
                </p>
                <p>
                    for in His hand are all the ends of the earth, * and the heights of the mountains He beholdeth.
                </p>
                <p>
                    <Symbols.Invitatory /> The Lord is with thee.
                </p>
                <p>
                    For the sea is His, and He made it; *
                    and His hands founded the dry land.
                </p>
                <p className="office-instruction">All kneel</p> 
                <p>
                    Come, let us worship and fall down before God; * let us weep before the Lord that made us,
                </p>
                <p>
                    for He is the Lord our God, and we are His people, * and the sheep of His pasture.
                </p>
                <p className="office-instruction">All rise</p> 
                <p>
                    <Symbols.Invitatory /> Hail, Mary, full of grace, * the Lord is with thee.
                </p>
                <p>
                    Today, if ye shall hear His voice, * harden not your hearts,
                </p>
                <p>
                    as in the provocation, according to the day of temptation in the wilderness: *
                    where your fathers tempted Me, proved and saw My works.
                </p>
                <p>
                    <Symbols.Invitatory /> The Lord is with thee.
                </p>
                <p>
                    Forty years long was I nigh unto that generation and said: * They do always err in their heart;
                </p>
                <p>
                    and they have not known My ways, * to whom I swore in My wrath that they should not enter into My rest.
                </p>
                <p>
                    <Symbols.Invitatory /> Hail, Mary, full of grace, * the Lord is with thee.
                </p>
                <GloriaPatri />
                <p>
                    <Symbols.Invitatory /> The Lord is with thee.
                </p>
                <p>
                    <Symbols.Response /> Hail, Mary, full of grace, * the Lord is with thee.
                </p>
            </div>
            <p className="office-title"> HYMN </p>
            <div className="flex flex-col hymn items-center">
            <div className="flex flex-col hymn gap-y-4 items-left">
                <div className="flex flex-col">
                    <p>The Lord, whom earth, and air, and sea</p>
                    <p>With one adoring voice resound;</p>
                    <p>Who rules them all in majesty;</p>
                    <p>In Mary's heart a cloister found.</p>
                </div>
                <div className="flex flex-col">
                    <p>Lo! in a humble Virgin's womb</p>
                    <p>O'ershadowed by almighty power,</p>
                    <p>He whom the stars, and sun, and moon,</p>
                    <p>Each serve in their appointed hour.</p>
                </div>
                <div className="flex flex-col">
                    <p>O Mother blest, to whom was given</p>
                    <p>Within thy compass to contain</p>
                    <p>The Architect of earth and heaven,</p>
                    <p>Whose hands the universe sustain!</p>
                </div>
                <div className="flex flex-col">
                    <p>To thee was sent an angel down;</p>
                    <p>In thee the Spirit was enshrined;</p>
                    <p>From thee came forth that mighty one,</p>
                    <p>The long-desired of all mankind.</p>
                </div>
                <p className="office-instruction">Bow</p>
                <div className="flex flex-col">
                    <p>O Jesu! born of a Virgin bright,</p>
                    <p>Immortal glory be to Thee;</p>
                    <p>Praise to the Father infinite,</p>
                    <p>And Holy Ghost eternally. Amen.</p>
                </div>
                <p className="office-instruction">Rise</p>
            </div>
            </div>
            {firstNocturn && <>
                <p className="office-title">First Nocturn</p>
                <p className="little-office">
                    <span className="red">Antiphon 1 </span>
                    Blessed art thou *
                    among women, and blessed is the fruit of thy womb.
                </p>
                <Psalm8 gloria={!isPassionTide} />
                <p className="little-office">
                    <span className="red">Ant. </span>
                    Blessed art thou among women, and blessed is the fruit of thy womb.
                </p>
                <p className="little-office">
                    <span className="red">Antiphon 2 </span>
                    Like unto choice myrrh *
                    thou yieldest a sweet smell, O holy Mother of God.
                </p>
            </>}
            {secondNocturn && <p className="office-title">Second Nocturn</p>}
            {thirdNocturn && <p className="office-title">Third Nocturn</p>}

            <ClosingPrayer />
        </div>
  );
};

export default Matins;