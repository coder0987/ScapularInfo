import { createContext } from 'react';

const SourcesContext = createContext({
  list: [], 
  addItem: (item: any) => {}
});

export default SourcesContext;
