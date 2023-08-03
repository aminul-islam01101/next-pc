import { publicApiSlice } from '../../api/apiSlice';

export const categoryApiSlice = publicApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: '/api/categories',
      }),
      providesTags: [],
    }),
  }),
});
export const { useGetCategoriesQuery } = categoryApiSlice;
