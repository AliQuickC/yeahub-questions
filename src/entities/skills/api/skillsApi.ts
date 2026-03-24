import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { base_url } from '../../../shared/const/const';
import type { SkillsParamsType, SkillsResponse } from '../model/types';

export const skillsApi = createApi({
  reducerPath: 'skillsApi',
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  endpoints: (builder) => ({
    getskillsList: builder.query<SkillsResponse, SkillsParamsType>({
      query: (params) => {
        const { limit = '65' } = params || {};
        return {
          url: 'skills',
          params: {
            limit,
          },
        };
      },
    }),
  }),
});

export const { useGetskillsListQuery } = skillsApi;
