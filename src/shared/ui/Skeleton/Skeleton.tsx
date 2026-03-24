import s from './Skeleton.module.sass';

interface Props {
  count?: number;
}
export function Skeleton({ count = 1 }: Props) {
  return (
    <ul className={s.List}>
      {[...Array(count)].map((_, index) => (
        <li key={index} className={s.Item}></li>
      ))}
    </ul>
  );
}
