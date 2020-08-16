import { Currency } from './Currency';

export interface Country {
    name: string;
    population: number;
    flag?: string;
    currencies: Currency[];
}

export interface CountryList {
    countries?: Country[]
}
