import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { valorantApi } from "../services/valorantApi";
import appModuleSlicer from "../slicer/appModuleSlicer";

export const store = configureStore({
  reducer: {
    appModule: appModuleSlicer,
    [valorantApi.reducerPath]: valorantApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(valorantApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
