import React, { FC } from "react"
import { useSelector } from "react-redux"
import { selectedCountries } from "../reducers/countryReducer"
import { Currency } from "../interfaces/Currency"
import CurrencyConverter from "./CurrencyConverter"
import { selectCurrencyBase } from "../reducers/currencyBaseReducer"

const SelectedCountries: FC = () => {

    const countries = useSelector(selectedCountries);
    const { currencyBase } = useSelector(selectCurrencyBase);

        return(
            <section>
                {countries ? countries.map((country, index) => {
                    return <div key={index}>
                        <p>{country.name}</p>
                        <p>{country.population}</p>
                        {country.currencies.map((currency: Currency, index: number) =>
                            <div key={index}>
                                <p>{currency.name} {currency.symbol} {Number(currency.baseCurrencyRate) / currencyBase}</p>
                                <CurrencyConverter baseCurrencyRate={currency.baseCurrencyRate} />
                            </div>
                        )}
                    </div>
                }
                ) : null}
            </section>
        )
}

export default SelectedCountries