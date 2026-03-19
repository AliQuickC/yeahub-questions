import s from './Filters.module.sass';
import { Search } from '../../../../features/search';
import { Specializations } from '../../../../widgets/specializations';
import { Skills } from '../../../../widgets/skills/ui/Skills';
import { Complexity } from '../../../../widgets/complexity';
import { Rate } from '../../../../widgets/rate';

export function Filters() {
  return (
    <aside className={s.Filters}>
      <Search />
      <Specializations />
      <Skills />
      <Complexity />
      <Rate />
    </aside>
  );
}
