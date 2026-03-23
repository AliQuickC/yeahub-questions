import s from './Search.module.sass';

interface Props {
  keyWords: string;
  setKeyWords: (keyWords: string) => void;
}

export function Search({ keyWords, setKeyWords }: Props) {
  return (
    <div>
      <input
        type="text"
        className={s.Input}
        value={keyWords}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setKeyWords(event.target.value)
        }
        placeholder="search..."
      />
    </div>
  );
}
