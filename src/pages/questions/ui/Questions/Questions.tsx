import s from './Questions.module.sass';
import { QuestionsList } from '../../../../widgets/questions';
import { Loader } from '../../../../shared/ui';
import { useGetQuestionsListQuery } from '../../../../entities/questions/api/questionsApi';
import { Pagination } from '../../../../features/pagination';

export function Questions() {
  const { isError, isLoading, data } = useGetQuestionsListQuery({});

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
          <Pagination />
        </>
      )}
    </section>
  );
}
