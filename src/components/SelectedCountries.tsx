import React, { FC } from "react"
import { Country } from "../interfaces/Country"
import { useSelector } from "react-redux"
import { selectedCountries } from "../reducers/countryReducer"
import { Currency } from "../interfaces/Currency"

const SelectedCountries: FC = () => {

    const countries = useSelector(selectedCountries);

    return (
        <section>
            {countries ? countries.map((country, index) => {
                return <div>
                    <p>{country.name}</p>
                    <p>{country.population}</p>
                    {country.currencies.map((currency: Currency, index: number) =>
                        <div key={index}>
                            <p>{currency.name} {currency.symbol} {currency.baseCurrencyRate}</p>

                        </div>
                    )}
                </div>
            }
            ) : null}
        </section>
    )
}

export default SelectedCountries