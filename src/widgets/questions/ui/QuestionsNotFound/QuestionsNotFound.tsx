import s from './QuestionsNotFound.module.sass';

export function QuestionsNotFound() {
  return <div className={s.QuestionNotFound}>
    <p>По условиям поиска, ничего не найдено !</p>
  </div>;
}
