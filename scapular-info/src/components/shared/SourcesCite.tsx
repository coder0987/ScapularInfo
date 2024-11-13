import React, { useContext, useEffect } from 'react';
import SourcesContext from '@/context/SourcesContext';

interface SourcesCiteProps {
  source: string;
  children: ReactNode;
  className: string;
}

const SourcesCite: React.FC<SourcesCiteProps> = ({ source, children, className }) => {
  const { addItem, list } = useContext(SourcesContext);

  useEffect(() => {
    if (source.trim()) {
      addItem(source);
      console.log(source)
    }
  }, [source]);

  useEffect(() => {
      console.log('Current List:', list);
    }, [list]);

  return <span className={className}> ({ children })</span>;
};

export default SourcesCite;

