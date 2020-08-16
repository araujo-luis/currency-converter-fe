import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { CountryList } from '../interfaces/Country';

const initialState: CountryList = {
  countries: []
};

export const updateDate = createSlice({
  name: 'country',
  initialState,
  reducers: {
    addCountry: (state, action: PayloadAction<string>) => {
      // state.value = action.payload;
    },
  },
});

export const { addCountry } = updateDate.actions;

export const selectCountries = (state: RootState) => state.countries.countries;

export default updateDate.reducer;
