import { useState } from 'react';
import SourcesContext from '@/context/SourcesContext';

const SourcesProvider = ( { children } ) => {
    const [list, updateList] = useState([]);

    const addItem = (additionalSource) => {
        updateList([...list, additionalSource]);
    }

    const value = { list, addItem };

    return (
        <SourcesContext.Provider value={value}>
              {children}
        </SourcesContext.Provider>
    );
};

export default SourcesProvider;