import { useSearchParams } from 'react-router-dom';
import { Filter } from '../../../shared/filter';
import type { ComplexityData } from '../../../shared/types/FilterTypes';

const FILTER_NAME = 'Уровень сложности';
const data: ComplexityData[] = [
  { id: '1,2,3', title: '1-3' },
  { id: '4,5,6', title: '4-6' },
  { id: '7,8', title: '7-8' },
  { id: '9,10', title: '9-10' },
];

export function Complexity() {
  const [searchParams] = useSearchParams();
  const complexity: string | null = searchParams.get('complexity');

  return (
    <Filter
      type={'complexity'}
      header={FILTER_NAME}
      data={data}
      selected={complexity}
    />
  );
}
