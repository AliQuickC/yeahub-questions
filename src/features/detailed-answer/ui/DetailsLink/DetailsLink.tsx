import s from './DetailsLink.module.sass';
import { NavLink } from 'react-router-dom';

interface Props {
  id: string;
}

export function DetailsLink({ id }: Props) {
  return (
    <NavLink to={id} className={s.DetailsLink}>
      Подробнее →
    </NavLink>
  );
}
