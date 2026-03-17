import s from './Question.module.sass';

import type { QuestionsResponseData } from '../../../entities/questions/model/types';
import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  data: QuestionsResponseData;
}
export function Question({ data }: Props) {
  const shortAnswer = useRef(null);

  useEffect(() => {
    const htmlContent = data.shortAnswer;
    if (shortAnswer.current) {
      (shortAnswer.current as HTMLElement).innerHTML = htmlContent;
    }
  }, []);

  return (
    <li className={s.Question}>
      <details className={s.Details}>
        <summary className={s.QuestionHeader}>
          <p className={s.QuestionTitle}>{data.title}</p>
          <svg
            width="24"
            height="24"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={s.AccordionIcon}
          >
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="currentColor"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
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

        <NavLink to={data.id.toString()} className={s.DetailsLink}>
          Подробнее →
        </NavLink>
      </details>
    </li>
  );
}
