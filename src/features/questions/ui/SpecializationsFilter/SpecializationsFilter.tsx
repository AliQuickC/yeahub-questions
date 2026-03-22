import { QuestionFilter } from '../../../../entities/questions';
import { useGetSpecializationsListQuery } from '../../../../entities/specializations/api/specializationsApi';

const FILTER_NAME = 'Специализация';

export function SpecializationsFilter() {
  const { data, isLoading, isError } = useGetSpecializationsListQuery({});

  return (
    <QuestionFilter
      type={'specializations'}
      header={FILTER_NAME}
      data={data?.data}
      isLoading={isLoading}
      isError={isError}
    />
  );
}
