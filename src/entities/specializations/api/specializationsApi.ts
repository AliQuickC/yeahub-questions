import type {
  SpecializationsParamsType,
  SpecializationsResponse,
} from '../model/types';
import baseApi from '../../../app/baseApi';

export const specializationsApi = baseApi.injectEndpoints({
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
      providesTags: ['Specializations'],
    }),
  }),
});

export const { useGetSpecializationsListQuery } = specializationsApi;
