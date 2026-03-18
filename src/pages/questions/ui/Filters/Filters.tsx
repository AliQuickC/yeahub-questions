import s from './Filters.module.sass';
import { Search } from '../../../../features/search';

export function Filters() {
  return (
    <aside className={s.Filters}>
      <Search />
      <div>Специализация</div>
      <div>Навыки</div>
      <div>Уровень сложности</div>
      <div>Рейтинг</div>
      <div>Статус</div>
    </aside>
  );
}
