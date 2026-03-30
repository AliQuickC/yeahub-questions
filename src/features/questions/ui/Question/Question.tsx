import s from './Question.module.sass';
import { AccordionIcon } from '../../../../shared/assets';
import type { QuestionsResponseData } from '../../../../entities/questions/model/questions-types';
import { DetailsLink } from '../..';

interface Props {
  data: QuestionsResponseData;
}
export function Question({ data }: Props) {
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
        <p
          className={s.ShortAnswer}
          dangerouslySetInnerHTML={{ __html: data?.shortAnswer }}
        ></p>

        {<DetailsLink id={data.id.toString()} />}
      </details>
    </li>
  );
}
