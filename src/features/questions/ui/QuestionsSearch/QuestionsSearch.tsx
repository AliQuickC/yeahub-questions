import { useSearchParams } from 'react-router-dom';
import { useActions } from '../../../../app/useActions';
import { useFilters } from '../../../../app/useAppSelector';
import { useDebounce } from '../../../../shared/hooks/useDebounce';
import { useEffect } from 'react';
import { SEARCH_PARAM_FIRST_PAGE } from '../../../../shared/const/const';
import { Search } from '../../../../shared/ui/Search/Search';

export function QuestionsSearch() {
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

  const setKeyWords = (keyWords: string) => {
    setFilters({ key: 'searchTerm', value: keyWords });
  };

  return <Search keyWords={searchTerm} setKeyWords={setKeyWords} />;
}
