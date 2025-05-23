import React from "react";

interface GloriaPatriProps {
    noBow?: boolean;
}


const GloriaPatri: React.FC<GloriaPatriProps> = ({ noBow }) => {
    return (
        <>
        <p className="little-office">
            {!noBow && <span className="office-instruction">(Bow)</span>} Glory be to the Father, and to the Son, and to the Holy Ghost. * 
        </p>
        <p className="little-office">
            <span className="office-instruction">(Rise)</span> As it was in the beginning, is now, and ever shall be world, without end. Amen.
        </p>
        </>
    );
  };
  
  export default GloriaPatri;


