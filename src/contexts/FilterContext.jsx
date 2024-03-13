import { useState, createContext } from 'react';

export const FilterContext = createContext();

export function FilterProvider({children}) {
  const [filters, setFilters] = useState({
    search: '',
    region: null
  });

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  )
}