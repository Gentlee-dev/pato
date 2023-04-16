"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState: number = 0;

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModal: (state, action) => {
      if (state === action.payload) return 0;
      return action.payload;
    },
  },
});

export const { setModal } = modalSlice.actions;
export default modalSlice.reducer;
