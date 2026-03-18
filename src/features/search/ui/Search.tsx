import s from './Search.module.sass';
import { useEffect } from 'react';
import { useActions } from '../../../app/useActions';
import { useFilters } from '../../../app/useAppSelector';
import { SEARCH_PARAM_FIRST_PAGE } from '../../../shared/const/const';
import { useDebounce } from '../../../shared/hooks/useDebounce';
import { useSearchParams } from 'react-router-dom';

export function Search() {
  const { setFilters } = useActions();
  const { searchTerm } = useFilters();

  const [, setSearchParams] = useSearchParams();

  const debounceKeyWords = useDebounce<string>(searchTerm, 1500);

  useEffect(() => {
    setSearchParams((searchParams) => {
      if (debounceKeyWords) {
        searchParams.set('search', debounceKeyWords);
      } else {
        searchParams.delete('search');
      }
      searchParams.set('page', SEARCH_PARAM_FIRST_PAGE);
      return searchParams;
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceKeyWords]);

  const setKeyWords = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ key: 'searchTerm', value: event.target.value });
  };

  return (
    <div>
      <input
        type="text"
        className={s.Input}
        value={searchTerm}
        onChange={setKeyWords}
        placeholder="search..."
      />
    </div>
  );
}
