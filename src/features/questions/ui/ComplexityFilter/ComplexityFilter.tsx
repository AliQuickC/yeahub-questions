import { QuestionFilter } from '../../../../entities/questions';
import type { ComplexityData } from '../../../../shared/types/FilterTypes';

const FILTER_NAME = 'Уровень сложности';
const data: ComplexityData[] = [
  { id: '1,2,3', title: '1-3' },
  { id: '4,5,6', title: '4-6' },
  { id: '7,8', title: '7-8' },
  { id: '9,10', title: '9-10' },
];

export function ComplexityFilter() {
  return (
    <QuestionFilter type={'complexity'} header={FILTER_NAME} data={data} />
  );
}
