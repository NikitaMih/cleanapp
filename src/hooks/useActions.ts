import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

import * as authActions from 'src/store/actions/authAction';
import * as itemsActions from 'src/store/actions/itemsActions';
import { actions as authReducerActions } from 'src/store/reducers/authReducer';
import { actions as itemsReducerActions } from 'src/store/reducers/itemsReducer';

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(
    () =>
      bindActionCreators(
        {
          ...authActions,
          ...authReducerActions,
          ...itemsActions,
          ...itemsReducerActions,
        },
        dispatch,
      ),
    [dispatch],
  );
};
