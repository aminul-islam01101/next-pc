/* eslint-disable import/no-cycle */
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import { publicApiSlice } from './api/apiSlice';
import builderReducer from './features/builders/builderSlice';

export const store = configureStore({
  reducer: {
    [publicApiSlice.reducerPath]: publicApiSlice.reducer,
    builders: builderReducer,

    // [privateApiSlice.reducerPath]: privateApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([publicApiSlice.middleware]),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
