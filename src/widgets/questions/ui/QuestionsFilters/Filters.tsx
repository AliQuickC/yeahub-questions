import s from './Filters.module.sass';
import {
  ComplexityFilter,
  QuestionsSearch,
  RatesFilter,
  SkillsFilter,
  SpecializationsFilter,
} from '../../../../features/questions';

export function Filters() {
  return (
    <aside className={s.Filters}>
      <QuestionsSearch />
      <SpecializationsFilter />
      <SkillsFilter />
      <ComplexityFilter />
      <RatesFilter />
    </aside>
  );
}
