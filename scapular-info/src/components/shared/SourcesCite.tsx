import React, { useContext, useEffect } from 'react';
import SourcesContext from '@/context/SourcesContext';

interface SourcesCiteProps {
  source: string;
}

const SourcesCite: React.FC<SourcesCiteProps> = ({ source, children, className }) => {
  const { addItem } = useContext(SourcesContext);

  useEffect(() => {
    if (source.trim()) {
      console.log(source)
      addItem(source);
    }
  }, [source]);

  return <span className={className}> ({ children }) </span>;
};

export default SourcesCite;

