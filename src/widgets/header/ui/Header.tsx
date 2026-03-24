import s from './Header.module.sass';
import { headerLogo } from '../../../shared/assets';

export function Header() {
  return (
    <header className="header">
      <div className={s.HeaderConteiner + ' container'}>
        <div className={s.MenuWrapper}>
          <img src={headerLogo} alt="logo" className={s.HeaderLogo} />

          <nav>
            <ul className={s.Menu}>
              <li>База вопросов</li>
              <li>Тренажёр</li>
              <li>Материалы</li>
              <li>Навыки (hh)</li>
            </ul>
          </nav>
        </div>

        <div className={s.ButtonsWrapper}>
          <button className={s.LoginButton}>Вход</button>
          <button className={s.SignUpButton}>Регистация</button>
        </div>
      </div>
    </header>
  );
}
