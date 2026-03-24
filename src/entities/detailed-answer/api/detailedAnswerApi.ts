import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { base_url } from '../../../shared/const/const';
import type { detailedAnswerResponse } from '../model/types';

export const detailedAnswerApi = createApi({
  reducerPath: 'detailedAnswerApi',
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  endpoints: (builder) => ({
    getDetailedAnswer: builder.query<detailedAnswerResponse, string | undefined>({
      query: (id) => {
        return {
          url: 'questions/public-questions/' + id,
        };
      },
    }),
  }),
});

export const { useGetDetailedAnswerQuery } = detailedAnswerApi;
