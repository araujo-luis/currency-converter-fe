import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import countryReducer from '../reducers/countryReducer';
import currencyBaseReducer from '../reducers/currencyBaseReducer';

export const store = configureStore({
  reducer: {
    countries: countryReducer,
    currencyBase: currencyBaseReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
