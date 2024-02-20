import { configureStore } from "@reduxjs/toolkit";
import { Api } from "../features/api/api";

export const store = configureStore({
  reducer: {
    [Api.reducerPath]: Api.reducer,
  },
  middleware: (defaultmiddleware) => defaultmiddleware().concat(Api.middleware),
});
