import s from './DetailsBack.module.sass';
import { useNavigate } from 'react-router-dom';

export function DetailsBack() {
  const navigate = useNavigate();

  return (
    <button className={s.BackLink} onClick={() => navigate(-1)}>
      {'< Назад'}
    </button>
  );
}
