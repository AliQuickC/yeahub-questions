import { useSearchParams } from 'react-router-dom';
import { urlDecode } from '../utility/url-code';
import type { FiltersType } from '../type/FilterTypes';

export const useSelectedFilters = (type: FiltersType) => {
  const [searchParams] = useSearchParams();
  const selected: string | null = searchParams.get(type);

  let selectedItems: string | string[] | null;
  if (selected === null) {
    selectedItems = null;
  } else if (type === 'skills' || type === 'rate') {
    selectedItems = selected.split(',');
  } else if (type === 'complexity') {
    selectedItems = selected.split(',').map((item) => urlDecode(item));
  } else {
    selectedItems = selected;
  }
  return selectedItems;
};
