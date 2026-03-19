import { useSearchParams } from 'react-router-dom';
import { useGetskillsListQuery } from '../../../entities/skills/api/skillsApi';
import { Filter } from '../../../shared/filter';

const FILTER_NAME = 'Навыки';

export function Skills() {
  const { data, error, isLoading } = useGetskillsListQuery({});

  const [searchParams] = useSearchParams();
  const skills: string | null = searchParams.get('skills');

  if (error) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>{`Список "${FILTER_NAME}" не был получен с сервера`}</div>;
  }

  return (
    <Filter
      type={'skills'}
      header={FILTER_NAME}
      data={data.data}
      selected={skills}
    />
  );
}
