import s from './SwitchButton.module.sass';

interface Props {
  checked: boolean;
  checkedTitle: string;
  uncheckedTitle: string;
  switchHandler: () => void;
}
export function SwitchButton({
  checked,
  checkedTitle,
  uncheckedTitle,
  switchHandler,
}: Props) {
  return (
    <button className={s.SwitchButton} onClick={switchHandler}>
      {checked ? checkedTitle : uncheckedTitle}
    </button>
  );
}
