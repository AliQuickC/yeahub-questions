import s from './Questions.module.sass';
import { QuestionsList } from '../../../../widgets/questions';
import { Loader } from '../../../../shared/ui';
import {
  DEFAULT_QUESTIONS_ON_PAGE,
  DEFAULT_QUESTIONS_TOTAL,
  FIRST_PAGE,
} from '../../../../shared/const/const';
import { useGetQuestionsListQuery } from '../../../../entities/questions/api/questionsApi';
import { useQuestionsSearchParams } from '../../../../shared/hooks/useQuestionsSearchParams';
import { Pagination } from '../../../../shared/ui/Pagination/Pagination';

export function Questions() {
  const { page, search, specializationId, skills, complexity, rate } =
    useQuestionsSearchParams();

  const { data, isLoading, isError } = useGetQuestionsListQuery({
    page: page,
    title: search,
    specializationId,
    skills,
    complexity,
    rate,
  });

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
          />
        </>
      )}
    </section>
  );
}
