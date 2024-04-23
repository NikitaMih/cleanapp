import type { AxiosResponse } from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "src/api/api";
import { Endpoints } from "src/api/endpoints";
import { combineUrl } from "src/api/url";
import { ActionTypeEnum } from "src/share/enum";

export const getItems = createAsyncThunk<
  {
    page: string;
    pageSize: string;
    sort: string;
  },
  {
    page: string;
    pageSize: string;
    sort: string | null;
    search: string | null;
  }
>(ActionTypeEnum.GET_ITEMS, async ({ page, pageSize, search, sort }, { rejectWithValue }) => {
  try {
    const url = combineUrl(Endpoints.ITEMS);
    const { data }: AxiosResponse = await api.get(url, {
      params: { page, pageSize, itemName: search, sortOrder: sort },
    });
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const addItem = createAsyncThunk<
  {
    page: string;
    pageSize: string;
  },
  {
    email: string;
    password: string;
    rememberMe: boolean;
  }
>(ActionTypeEnum.ADD_ITEMS, async (newItem, { rejectWithValue }) => {
  try {
    const url = combineUrl(Endpoints.ITEMS);
    const { data }: AxiosResponse = await api.post(url, { ...newItem });
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const editItem = createAsyncThunk<
  {
    page: string;
    pageSize: string;
  },
  {
    email: string;
    password: string;
    rememberMe: boolean;
  }
>(ActionTypeEnum.EDIT_ITEMS, async (newItem, { rejectWithValue }) => {
  try {
    const url = combineUrl(Endpoints.ITEMS, [`/${newItem.id}`]);
    const { data }: AxiosResponse = await api.patch(url, { ...newItem });
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});
