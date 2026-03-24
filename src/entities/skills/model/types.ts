export type SkillsResponseData = {
  id: number;
  title: string;
  slug: string;
  description: string;
  imageSrc: null;
  createdAt: string;
  updatedAt: string;
  createdBy: {
    id: string;
    username: string;
  } | null;
};

export interface SkillsResponse {
  data: SkillsResponseData[];
  page: number;
  limit: number;
  total: number;
}

export type SkillsParamsType = { limit?: string };
