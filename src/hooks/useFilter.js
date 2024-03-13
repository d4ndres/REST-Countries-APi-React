import { useContext } from "react";
import { FilterContext } from "../contexts/FilterContext";

export function useFilter() {
  const { filters, setFilters } = useContext(FilterContext);

  const countriesFiltered = ( countries ) => {
    return countries.filter( country => {
      return country.name.toLowerCase().includes(filters.search.toLowerCase()) && 
      (filters.region != 'all' ? country.region === filters.region : true)
    })
  }

  const dispatchSearch = (search) => {
    setFilters({ ...filters, search });
  }

  const dispatchRegion = (region) => {
    setFilters({ ...filters, region });
  }


  return { filters, countriesFiltered, dispatchSearch, dispatchRegion };
}