import { useState, createContext } from 'react';

export const FilterContext = createContext();

import PropTypes from 'prop-types';

export function FilterProvider({ children }) {
  const [filters, setFilters] = useState({
    search: '',
    region: 'all'
  });

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  )
}

FilterProvider.propTypes = {
  children: PropTypes.node.isRequired
};
