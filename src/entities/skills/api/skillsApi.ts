import type { SkillsParamsType, SkillsResponse } from '../model/types';
import baseApi from '../../../app/baseApi';

export const skillsApi = baseApi.injectEndpoints({
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
      providesTags: ['Skills'],
    }),
  }),
});

export const { useGetskillsListQuery } = skillsApi;
