"use client";

import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./Slides/modal";

export const store = configureStore({
  reducer: {
    modal: modalSlice,
  },
});

export type RootSate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
