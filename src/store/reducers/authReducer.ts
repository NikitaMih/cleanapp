import type { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";
import type { AxiosError } from "axios";

import { createSlice } from "@reduxjs/toolkit";

import { login } from "src/store/actions/authAction";

const initialState: any = {
  id: 0,
  role: null,
  loading: false,
  accessToken: "",
  redirect: "",
  redirectLogin: "",
  error: [],
  registrationData: {
    lastName: "",
    firstName: "",
    middleName: "",
    email: "",
    phone: "",
    city: 1,
    role: 1,
    nickname: "",
    hideRealName: true,
  },
  resetData: {
    email: "",
  },
  specialistData: {
    justiceSpecializations: [],
    branchesOfLaw: [],
    about: "",
    remote: false,
    service: "",
    companyAddress: "",
    documents: [],
  },
};

export const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<Reducer.AuthState>) => {
    builder
      .addCase(login.rejected, (state: Reducer.AuthState, action) => {
        state.loading = false;
        const { response } = action.payload as AxiosError<Response.Error>;
        if (response) {
          state.error = response.data.errors;
        }
      })
      .addCase(login.pending, (state: Reducer.AuthState) => {
        state.loading = true;
        state.error = [];
      })
      .addCase(login.fulfilled, (state: any, { payload }: PayloadAction<any>) => {
        localStorage.setItem("token", payload.access_token);
      });
  },
});

export const { reducer, actions } = authReducer;
