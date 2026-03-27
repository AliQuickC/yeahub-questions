import { base_url } from '../shared/const/const';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  tagTypes: ['Questions', 'Specializations', 'Skills'],
  endpoints: () => ({}),
});

export default baseApi;
