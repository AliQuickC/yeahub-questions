export interface detailedAnswerResponse {
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
  complexity: 4;
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
  questionSpecializations: [
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
  questionSkills: [
    {
      id: number;
      title: string;
      description: string;
      imageSrc: string;
      createdAt: string;
      updatedAt: string;
    },
  ];
  questionTopics: [];
}
