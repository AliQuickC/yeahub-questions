import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { base_url } from '../../../shared/const/const';
import type {
  SpecializationsParamsType,
  SpecializationsResponse,
} from '../model/types';

export const specializationsApi = createApi({
  reducerPath: 'specializationsApi',
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  endpoints: (builder) => ({
    getSpecializationsList: builder.query<
      SpecializationsResponse,
      SpecializationsParamsType
    >({
      query: (params) => {
        const { limit = '30' } = params || {};
        return {
          url: 'specializations',
          params: {
            limit,
          },
        };
      },
    }),
  }),
});

export const { useGetSpecializationsListQuery } = specializationsApi;
