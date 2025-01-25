import React, { ReactNode, useContext, useEffect } from 'react';
import SourcesContext from '@/context/SourcesContext';

const Symbols = () => {
  return <span className="little-office red">✠</span>;
};

Symbols.Versicle = () => {
    return <span className="little-office red">℣.</span>;
}

Symbols.Response = () => {
    return <span className="little-office red">℟.</span>;
}

export default Symbols;