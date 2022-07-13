import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://elif-back.herokuapp.com",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/api/products",
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
