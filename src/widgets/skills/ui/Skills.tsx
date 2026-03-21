import { useGetskillsListQuery } from '../../../entities/skills/api/skillsApi';
import { Filter } from '../../../shared/filter';

const FILTER_NAME = 'Навыки';

export function Skills() {
  const { data, isLoading, isError } = useGetskillsListQuery({});

  return (
    <Filter
      type={'skills'}
      header={FILTER_NAME}
      data={data?.data}
      isLoading={isLoading}
      isError={isError}
    />
  );
}
