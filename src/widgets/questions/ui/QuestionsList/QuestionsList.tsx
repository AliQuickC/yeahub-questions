import s from './QuestionsList.module.sass';
import type { QuestionsResponseData } from '../../../../entities/questions/model/types';
import { QuestionsNotFound } from '../QuestionsNotFound/QuestionsNotFound';
import { Question } from '../../../../features/questions';

interface Props {
  questions: QuestionsResponseData[] | undefined;
}

export function QuestionsList({ questions }: Props) {
  const questionsList = questions?.map((item) => (
    <Question key={item.id} data={item} />
  ));

  return (
    <ul className={s.QuestionsList}>
      {questionsList?.length ? questionsList : <QuestionsNotFound />}
    </ul>
  );
}
