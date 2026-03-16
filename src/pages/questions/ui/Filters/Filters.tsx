import s from './Filters.module.sass';

export function Filters() {
  return (
    <aside className={s.Filters}>
      <input type="text" />

      <div>Специализация</div>

      <div>Навыки</div>

      <div>Уровень сложности</div>

      <div>Рейтинг</div>

      <div>Статус</div>
    </aside>
  );
}
