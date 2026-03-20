import s from './Question.module.sass';
import type { QuestionsResponseData } from '../../../entities/questions/model/types';
import { useEffect, useRef } from 'react';
import { DetailsLink } from '../../detailed-answer';
import { AccordionIcon } from '../../../shared/assets';

interface Props {
  data: QuestionsResponseData;
}
export function Question({ data }: Props) {
  const shortAnswer = useRef(null);

  useEffect(() => {
    const htmlContent = data?.shortAnswer;
    if (shortAnswer.current && htmlContent) {
      (shortAnswer.current as HTMLElement).innerHTML = htmlContent;
    }
  }, [data.shortAnswer]);

  return (
    <li className={s.Question}>
      <details className={s.Details}>
        <summary className={s.QuestionHeader}>
          <p className={s.QuestionTitle}>{data.title}</p>
          {<AccordionIcon className={s.AccordionIcon} color="#6A0BFF" />}
        </summary>
        <div className={s.Indicators}>
          <div className={s.Raiting}>
            <span>Рейтинг:</span>
            <output>{data.rate}</output>
          </div>
          <div className={s.Difficulty}>
            <span>Сложность:</span>
            <output>{data.complexity}</output>
          </div>
        </div>
        <p className={s.ShortAnswer} ref={shortAnswer}>
          {data.shortAnswer}
        </p>

        {<DetailsLink id={data.id.toString()} />}
      </details>
    </li>
  );
}
