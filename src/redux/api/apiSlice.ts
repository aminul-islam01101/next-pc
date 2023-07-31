/* eslint-disable import/no-cycle */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseQueryWithReAuth } from './baseQueryWithReAuth';

const tags: string[] | [] = [];
// export const privateApiSlice = createApi({
//   reducerPath: 'publicApi',
//   baseQuery: baseQueryWithReAuth,
//   tagTypes: tags,
//   endpoints: () => ({}),
// });
export const publicApiSlice = createApi({
  reducerPath: 'privateApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  tagTypes: tags,
  endpoints: () => ({}),
});
