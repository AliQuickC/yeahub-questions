import s from './QuestionsPage.module.sass';
import { Questions } from './Questions/Questions';
import { Filters } from '../../../widgets/questions/ui/QuestionsFilters/Filters';

export function QuestionsPage() {
  return (
    <main className={s.Main}>
      <div className={s.MainContainer + ' container'}>
        <Questions />
        <Filters />
      </div>
    </main>
  );
}
