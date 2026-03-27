import type { QuestionsParamsType, QuestionsResponse } from '../model/questions-types';
import baseApi from '../../../app/baseApi';
import type { detailedAnswerResponse } from '../model/answer-types';

export const questionsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuestionsList: builder.query<QuestionsResponse, QuestionsParamsType>({
      query: (params) => {
        const {
          page = '1',
          title,
          specializationId,
          skills,
          complexity,
          rate,
        } = params || {};
        return {
          url: 'questions/public-questions',
          params: {
            page,
            title,
            specializationId,
            skills,
            complexity,
            rate,
          },
        };
      },
      providesTags: ['Questions'],
    }),
    getDetailedAnswer: builder.query<
      detailedAnswerResponse,
      string | undefined
    >({
      query: (id) => {
        return {
          url: 'questions/public-questions/' + id,
        };
      },
      providesTags: ['Questions'],
    }),
  }),
  overrideExisting: false,
});

export const { useGetQuestionsListQuery, useGetDetailedAnswerQuery } = questionsApi;
