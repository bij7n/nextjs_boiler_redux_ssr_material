import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import type { RootState } from "store";

export const testSlice = createSlice({
  name: "test",

  initialState: { counter: 0 },

  reducers: {
    increaseCounter(state) {
      state.counter += 1;
    },
  },

  extraReducers(builder) {
    builder.addCase<typeof HYDRATE, PayloadAction<RootState, typeof HYDRATE>>(HYDRATE, (state, { payload }) => ({
      ...state,
      ...payload[testSlice.name],
    }));
  },
});

export const { increaseCounter } = testSlice.actions;
export const counterSelector = (state: RootState) => state[testSlice.name];
