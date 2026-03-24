export type SpecializationsResponseData = {
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

export interface SpecializationsResponse {
  data: SpecializationsResponseData[];
  page: number;
  limit: number;
  total: number;
}

export type SpecializationsParamsType = { limit?: string };
