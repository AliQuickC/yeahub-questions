import s from './Questions.module.sass';
import { QuestionsList } from '../../../../widgets/questions';
import { Loader } from '../../../../shared/ui';
import { Pagination } from '../../../../features/pagination';
import { useSearchParams } from 'react-router-dom';
import {
  DEFAULT_QUESTIONS_ON_PAGE,
  DEFAULT_QUESTIONS_TOTAL,
  FIRST_PAGE,
  SEARCH_PARAM_FIRST_PAGE,
} from '../../../../shared/const/const';
import { useGetQuestionsListQuery } from '../../../../entities/questions/api/questionsApi';
import { decodeUrl } from '../../../../shared/utility/url-code';

export function Questions() {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get('page') || SEARCH_PARAM_FIRST_PAGE;
  const search = searchParams.get('search') || undefined;
  const specializationId: string | undefined =
    searchParams.get('specializations') || undefined;
  const skills: string | undefined = searchParams.get('skills') || undefined;
  const complexity: string | null =
    searchParams.get('complexity');
  const rate: string | undefined = searchParams.get('rate') || undefined;

  const { isError, isLoading, data } = useGetQuestionsListQuery({
    page: page,
    title: search,
    specializationId,
    skills,
    complexity: complexity ? decodeUrl(complexity) : undefined,
    rate,
  });

  const handlePageClick = (page: number) => {
    setSearchParams((searchParams) => {
      searchParams.set('page', page.toString());
      return searchParams;
    });
  };

  const handleNextPage = (page: number, totalPages: number) => {
    const currentPage = Number(page);
    if (currentPage < totalPages) {
      setSearchParams((searchParams) => {
        searchParams.set('page', (currentPage + 1).toString());
        return searchParams;
      });
    }
  };

  const handlePrevPage = (page: number) => {
    const currentPage = Number(page);
    if (currentPage > FIRST_PAGE) {
      setSearchParams((searchParams) => {
        searchParams.set('page', (currentPage - 1).toString());
        return searchParams;
      });
    }
  };

  return (
    <section className={s.QuestionsSection}>
      <h2>Вопросы</h2>
      {isError ? (
        <h3>Ошибка получения данных с сервера!</h3>
      ) : isLoading ? (
        <Loader />
      ) : (
        <>
          <QuestionsList questions={data?.data} />
          <Pagination
            page={data?.page || FIRST_PAGE}
            limit={data?.limit || DEFAULT_QUESTIONS_ON_PAGE}
            total={data?.total || DEFAULT_QUESTIONS_TOTAL}
            handlePageClick={handlePageClick}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
          />
        </>
      )}
    </section>
  );
}
