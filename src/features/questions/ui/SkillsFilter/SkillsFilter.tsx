import { QuestionFilter } from '../../../../entities/questions';
import { useGetskillsListQuery } from '../../../../entities/skills/api/skillsApi';

const FILTER_NAME = 'Навыки';

export function SkillsFilter() {
  const { data, isLoading, isError } = useGetskillsListQuery({});

  return (
    <QuestionFilter
      type={'skills'}
      header={FILTER_NAME}
      data={data?.data}
      isLoading={isLoading}
      isError={isError}
    />
  );
}
