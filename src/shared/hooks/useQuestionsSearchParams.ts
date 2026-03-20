import { useSearchParams } from 'react-router-dom';
import { SEARCH_PARAM_FIRST_PAGE } from '../const/const';
import { decodeUrl } from '../utility/url-code';

export const useQuestionsSearchParams = () => {
  const [searchParams] = useSearchParams();

  const page = searchParams.get('page') || SEARCH_PARAM_FIRST_PAGE;
  const search = searchParams.get('search') || undefined;
  const specializationId: string | undefined =
    searchParams.get('specializations') || undefined;
  const skills: string | undefined = searchParams.get('skills') || undefined;

  const complexityParam: string | null = searchParams.get('complexity');
  const complexity = complexityParam ? decodeUrl(complexityParam) : undefined;

  const rate: string | undefined = searchParams.get('rate') || undefined;

  return { page, search, specializationId, skills, complexity, rate };
};
