import { ReactNode, useState } from 'react';
import SourcesContext from '@/context/SourcesContext';

const SourcesProvider = ( { children }: { children: ReactNode } ) => {
    const [list, updateList] = useState<string[]>([]);

    const addItem = (additionalSource: string) => {
      console.log('Adding item:', additionalSource);
      updateList((prevList: string[]) => {
        if (prevList.includes(additionalSource)) {
          return prevList;
        }
        return [...prevList, additionalSource];
      });
    };


    const value = { list, addItem };

    return (
        <SourcesContext.Provider value={value}>
              {children}
        </SourcesContext.Provider>
    );
};

export default SourcesProvider;