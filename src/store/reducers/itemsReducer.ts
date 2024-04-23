import type { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";
import type { AxiosError } from "axios";

import { createSlice } from "@reduxjs/toolkit";

import { getItems } from "src/store/actions/itemsActions";

const initialState: any = {
  items: [],
  total: 0,
  loading: false,
};

export const itemsReducer = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<Reducer.AuthState>) => {
    builder
      .addCase(getItems.rejected, (state: Reducer.AuthState, action) => {
        state.loading = false;
        state.items = [];
      })
      .addCase(getItems.pending, (state: Reducer.AuthState) => {
        state.loading = true;
        state.items = [];
      })
      .addCase(getItems.fulfilled, (state: any, { payload }: PayloadAction<any>) => {
        state.total = payload.total;
        state.items = payload.result;
        state.loading = false;
      });
  },
});

export const { reducer, actions } = itemsReducer;
