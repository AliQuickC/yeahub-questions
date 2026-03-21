import { useSearchParams } from 'react-router-dom';
import { decodeUrl } from '../utility/url-code';
import type { FiltersType } from '../types/FilterTypes';

export const useSelectedFilters = (type: FiltersType) => {
  const [searchParams] = useSearchParams();
  const selected: string | null = searchParams.get(type);

  let selectedItems: string | string[] | null;
  if (selected === null) {
    selectedItems = null;
  } else if (type === 'skills' || type === 'rate') {
    selectedItems = selected.split(',');
  } else if (type === 'complexity') {
    selectedItems = selected.split(',').map((item) => decodeUrl(item));
  } else {
    selectedItems = selected;
  }
  return selectedItems;
};
