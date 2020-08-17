import React, { FC } from "react"
import { useSelector } from "react-redux"
import { selectedCountries } from "../reducers/countryReducer"
import { Currency } from "../interfaces/Currency"
import CurrencyConverter from "./CurrencyConverter"
import { selectCurrencyBase } from "../reducers/currencyBaseReducer"

const SelectedCountries: FC = () => {
    const countries = useSelector(selectedCountries);
    const { currencyBase } = useSelector(selectCurrencyBase);

    const numberWithCommas = (x: number) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const convertCurrency = (number: number) => {
        return (number / currencyBase).toFixed(2);
    }

    return (
        <section>
            <div className="container">
                <div className="col-lg-8 mx-auto countries">
                    <h1>Countries</h1>


                    {countries ? countries.map((country, index) => {
                        return <div className="converter-container" key={index}>
                            <div className="flag-container col-md-4">
                                <div className="rounded-circle image-container" style={{ backgroundImage: `url(${country.flag})` }}>
                                </div>
                            </div>

                            <div className="country-container col-md-8">

                                <h1>{country.name}</h1>
                                <p>Population: {numberWithCommas(country.population)}</p>

                                {country.currencies.map((currency: Currency, index: number) =>
                                    <section key={index}>
                                        <p>Currency Name: {currency.name} ({currency.symbol})</p>
                                        <p>Currency Rate: {convertCurrency(Number(currency.baseCurrencyRate))}</p>
                                        <CurrencyConverter baseCurrencyRate={currency.baseCurrencyRate} symbol={currency.symbol} />
                                    </section>
                                )}
                            </div>
                        </div>
                    }
                    ) : null}
                </div>
            </div>
        </section>
    )
}

export default SelectedCountries