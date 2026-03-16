export type QuestionsResponseData = {
  id: number;
  title: string;
  slug: string;
  description: string;
  code: string | null;
  imageSrc: string | null;
  keywords: string[];
  longAnswer: string;
  shortAnswer: string;
  status: string;
  rate: number;
  complexity: number;
  createdAt: string;
  updatedAt: string;
  createdById: string;
  updatedById: string;
  createdBy: {
    id: string;
    username: string;
  };
  updatedBy: {
    id: string;
    username: string;
  };
  questionTopics: {
    id: number;
    title: string;
    description: string;
    imageSrc: string;
    createdAt: string;
    updatedAt: string;
  }[];
  questionSpecializations: [
    {
      id: number;
      title: string;
      slug: string;
      description: string;
      imageSrc: null;
      createdAt: string;
      updatedAt: string;
    },
  ];
  questionSkills: [
    {
      id: number;
      title: string;
      description: string;
      imageSrc: string;
      createdAt: string;
      updatedAt: string;
      specializations: [
        {
          id: number;
          title: string;
          slug: string;
          description: string;
          imageSrc: string | null;
          createdAt: string;
          updatedAt: string;
        },
      ];
    },
  ];
};

export interface QuestionsResponse {
  data: QuestionsResponseData[];
  page: number;
  limit: number;
  total: number;
}

interface IFilters {
  page: string;
  limit: string;
  specializations: string[];
}

export type QuestionsParamsType = Partial<IFilters>;
