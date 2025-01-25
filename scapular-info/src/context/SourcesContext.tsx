import { createContext } from 'react';

interface SourcesContextType {
  list: string[];
  addItem: (item: string) => void;
}

const SourcesContext = createContext<SourcesContextType>({
  list: [],
  addItem: () => {}
});

export default SourcesContext;
