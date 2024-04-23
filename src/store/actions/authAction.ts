import type { AxiosResponse } from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "src/api/api";
import { Endpoints } from "src/api/endpoints";
import { combineUrl } from "src/api/url";
import { ActionTypeEnum } from "src/share/enum";

export const login = createAsyncThunk<
  { access_token: string },
  {
    login: string;
    password: string;
  }
>(ActionTypeEnum.AUTH_LOGIN, async (loginData, { rejectWithValue }) => {
  try {
    const url = combineUrl(Endpoints.AUTH_LOGIN);
    const { data }: AxiosResponse = await api.post(url, {
      ...loginData,
    });
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});
