import s from './DetailedAnswer.module.sass';
import { useEffect, useRef } from 'react';
import { useGetDetailedAnswerQuery } from '../../../../entities/detailed-answer/api/detailedAnswerApi';
import { useParams } from 'react-router-dom';
import { DetailsBack } from '../../../../features/detailed-answer';
import { Loader } from '../../../../shared/ui/Loader/Loader';

export function DetailedAnswer() {
  const { id } = useParams();

  const { data, isLoading, isError } = useGetDetailedAnswerQuery(id);

  const shortAnswer = useRef(null);
  const longAnswer = useRef(null);

  useEffect(() => {
    const htmlContent = data?.shortAnswer;
    if (shortAnswer.current && htmlContent) {
      (shortAnswer.current as HTMLElement).innerHTML = htmlContent;
    }
  }, [data?.shortAnswer]);

  useEffect(() => {
    const htmlContent = data?.longAnswer;
    if (longAnswer.current && htmlContent) {
      (longAnswer.current as HTMLElement).innerHTML = htmlContent;
    }
  }, [data?.longAnswer]);

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
            <p ref={shortAnswer}>{data?.shortAnswer}</p>
          </article>
          <article className={s.LongAnsver}>
            <h3>Длинный ответ</h3>
            <p ref={longAnswer}>{data?.longAnswer}</p>
          </article>
        </>
      )}
    </section>
  );
}
