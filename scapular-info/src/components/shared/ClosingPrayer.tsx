import Symbols from "./Symbols";

const ClosingPrayer = () => {
    return (
        <div className="flex flex-col gap-y-3">
            <p className="office-title"> SACROSANCTAE </p>
            <p className="office-instruction">Kneel, even in private recitation</p>
            <p className="little-office">
                To the Most Holy and undivided Trinity, to the Manhood of our Lord Jesus Christ Crucified,
                to the fruitful Virginity of the most blessed and most glorious Mary, always a Virgin,
                and to the holiness of all the Saints be ascribed everlasting praise, honour, and glory,
                by all creatures, and to us be granted the forgiveness of all our sins, world without end.
            </p>
            <p className="little-office"><Symbols.Response /> Amen.</p>
            <p className="little-office"><Symbols.Versicle /> Blessed be the womb of the Virgin Mary which bore the Son of the Eternal Father.</p>
            <p className="little-office"><Symbols.Response /> And blessed be the paps which gave suck to Christ our Lord.</p>
            <p className="office-instruction">Say privately an Our Father and a Hail Mary</p>
        </div>
    );
  };
  
  export default ClosingPrayer;