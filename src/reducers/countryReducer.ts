import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { CountryList, Country } from '../interfaces/Country';

const initialState: CountryList = {
  countries: []
};

export const updateCountry = createSlice({
  name: 'country',
  initialState,
  reducers: {
    addCountry: (state, action: PayloadAction<Country>) => {
      if (!state.countries?.some(e => e.name === action.payload.name))
          state.countries?.push(action.payload)
    },
  },
});

export const { addCountry } = updateCountry.actions;

export const selectedCountries = (state: RootState) => state.countries.countries;

export default updateCountry.reducer;
