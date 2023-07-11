import { useContext } from 'react';
import { FilterContext } from '../Context/filter-context';

export function useFilter() {
  return useContext(FilterContext);
}
