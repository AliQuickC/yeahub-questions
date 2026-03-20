import { useSearchParams } from 'react-router-dom';
import { FIRST_PAGE } from '../const/const';

export const usePaginationQuestions = () => {
  const [, setSearchParams] = useSearchParams();

  const handlePageClick = (page: number) => {
    setSearchParams((searchParams) => {
      searchParams.set('page', page.toString());
      return searchParams;
    });
  };

  const handleNextPage = (page: number, totalPages: number) => {
    if (page < totalPages) {
      setSearchParams((searchParams) => {
        searchParams.set('page', (page + 1).toString());
        return searchParams;
      });
    }
  };

  const handlePrevPage = (page: number) => {
    if (page > FIRST_PAGE) {
      setSearchParams((searchParams) => {
        searchParams.set('page', (page - 1).toString());
        return searchParams;
      });
    }
  };

  return { handleNextPage, handlePrevPage, handlePageClick };
};
