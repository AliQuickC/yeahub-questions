import { useSearchParams } from 'react-router-dom';
import { useGetSpecializationsListQuery } from '../../../entities/specializations/api/specializationsApi';
import { Filter } from '../../../shared/filter';

const FILTER_NAME = 'Специализация';

export function Specializations() {
  const { data, error, isLoading } = useGetSpecializationsListQuery({});

  const [searchParams] = useSearchParams();
  const specializations: string | null = searchParams.get('specializations');

  if (error) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>{`Список ${FILTER_NAME} не был получен с сервера`}</div>;
  }

  return (
    <Filter
      type={'specializations'}
      header={FILTER_NAME}
      data={data.data}
      selected={specializations}
    />
  );
}
