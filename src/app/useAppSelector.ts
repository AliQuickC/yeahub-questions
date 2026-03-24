import { useSelector, type TypedUseSelectorHook } from 'react-redux';
import type { RootState } from './appStore';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useFilters = () => {
  const {
    filters,
    filters: { searchTerm },
  } = useAppSelector((state) => state.filters);

  return {
    searchTerm,
    filters,
  };
};
