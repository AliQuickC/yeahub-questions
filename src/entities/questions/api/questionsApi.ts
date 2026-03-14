import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { base_url } from '../../../shared/const/const';
import type { QuestionsParamsType, QuestionsResponse } from '../model/types';

export const questionsApi = createApi({
  reducerPath: 'questionsApi',
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  endpoints: (builder) => ({
    getQuestionsList: builder.query<QuestionsResponse, QuestionsParamsType>({
      query: (params) => {
        const { page = '1' } = params || {};
        return {
          url: 'questions/public-questions',
          params: {
            page,
          },
        };
      },
    }),
  }),
});

export const { useGetQuestionsListQuery } = questionsApi;
