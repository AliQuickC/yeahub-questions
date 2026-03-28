import s from './DetailedAnswer.module.sass';
import { useParams } from 'react-router-dom';
import { DetailsBack } from '../../../../features/detailed-answer';
import { Loader } from '../../../../shared/ui/Loader/Loader';
import { useGetDetailedAnswerQuery } from '../../../../entities/questions/api/questionsApi';

export function DetailedAnswer() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetDetailedAnswerQuery(id);

  if (!data?.shortAnswer || !data?.longAnswer) {
    return null;
  }

  return (
    <section className={s.DetailedAnswerSection}>
      {isError ? (
        <h3>Ошибка получения данных с сервера!</h3>
      ) : isLoading ? (
        <Loader />
      ) : (
        <>
          <DetailsBack />
          <article className={s.AnsverHeader}>
            <h2>{data?.title}</h2>
            <p>{data?.description}</p>
          </article>
          <article className={s.ShortAnsver}>
            <h3>Короткий ответ</h3>
            <p dangerouslySetInnerHTML={{ __html: data?.shortAnswer }}></p>
          </article>
          <article className={s.LongAnsver}>
            <h3>Длинный ответ</h3>
            <p dangerouslySetInnerHTML={{ __html: data?.longAnswer }}></p>
          </article>
        </>
      )}
    </section>
  );
}
