"use client";

import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./Slides/modal";
import searchSlice from "./Slides/search";

export const store = configureStore({
  reducer: {
    search: searchSlice,
    modal: modalSlice,
  },
});

export type RootSate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
