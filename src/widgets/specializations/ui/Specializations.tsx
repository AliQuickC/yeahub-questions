import { useGetSpecializationsListQuery } from '../../../entities/specializations/api/specializationsApi';
import { Filter } from '../../../shared/filter';

const FILTER_NAME = 'Специализация';

export function Specializations() {
  const { data, isLoading, isError } = useGetSpecializationsListQuery({});

  return (
    <Filter
      type={'specializations'}
      header={FILTER_NAME}
      data={data?.data}
      isLoading={isLoading}
      isError={isError}
    />
  );
}
