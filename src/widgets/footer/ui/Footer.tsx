import s from './Footer.module.sass';

export function Footer() {
  return (
    <footer className={s.Footer + ' footer'}>
      <div className="container">
        <div className={s.Title}>Yeahub</div>
      </div>
    </footer>
  );
}
