import { Filter } from '../../../shared/filter';
import type { RateData } from '../../../shared/types/FilterTypes';

const FILTER_NAME = 'Рейтинг';
const data: RateData[] = [
  { id: 1, title: 1 },
  { id: 2, title: 2 },
  { id: 3, title: 3 },
  { id: 4, title: 4 },
  { id: 5, title: 5 },
];

export function Rate() {
  return (
    <Filter type={'rate'} header={FILTER_NAME} data={data} />
  );
}
