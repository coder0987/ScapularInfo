import { createContext } from 'react';

const SourcesContext = createContext({
  list: [], 
  addItem: () => {}
});

export default SourcesContext;
