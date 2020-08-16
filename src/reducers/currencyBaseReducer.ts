import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

const initialState: number = 10.291336;

export const currencyBase = createSlice({
    name: 'currencyBase',
    initialState,
    reducers: {
        setCurrencyBase: (state, action: PayloadAction<number>) => {
           state = action.payload;

        },
    },
});

export const { setCurrencyBase } = currencyBase.actions;

export const selectCurrencyBase = (state: RootState) => state;

export default currencyBase.reducer;
