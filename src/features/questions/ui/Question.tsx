import s from './Question.module.sass';

import type { QuestionsResponseData } from '../../../entities/questions/model/types';

interface Props {
  data: QuestionsResponseData;
}
export function Question({ data }: Props) {
  return <li className={s.Question}>{data.title}</li>;
}
