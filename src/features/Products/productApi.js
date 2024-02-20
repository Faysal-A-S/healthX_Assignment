import { Api } from "../api/api";

export const productApi = Api.injectEndpoints({
  endpoints: (builder) => ({
    products: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),
  }),
});
export const { useProductsQuery } = productApi;
