import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
    headers: { "Content-Type": "application/json" },
  }),
  endpoints: (builder) => ({}),
});
