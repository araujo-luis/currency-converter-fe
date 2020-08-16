export interface Currency {
    code: string;
    name: string;
    symbol: string;
    baseCurrencyRate: any;
}

export interface BaseCurrencyRate {
    baseCurrencyRate: number;
    symbol: string;
}
