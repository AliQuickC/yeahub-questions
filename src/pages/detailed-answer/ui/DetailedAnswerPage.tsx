import s from './DetailedAnswerPage.module.sass';
import { DetailedAnswer } from './DetailedAnswer/DetailedAnswer';

export function DetailedAnswerPage() {
  return (
    <main>
      <div className={s.MainContainer + ' container'}>
        <DetailedAnswer />
      </div>
    </main>
  );
}
