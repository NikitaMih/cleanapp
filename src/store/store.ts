import { configureStore } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { reducer as authReducer } from "src/store/reducers/authReducer";
import { reducer as itemsReducer } from "src/store/reducers/itemsReducer";

import api from "src/api/api";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const extraArgument: { api: AxiosInstance } = {
  api,
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
    items: itemsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument,
      },
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppDispatch = typeof store.dispatch;

export type ThunkExtraArg = {
  api: AxiosInstance;
};

export type ThunkConfig<T> = {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: RootState;
};
