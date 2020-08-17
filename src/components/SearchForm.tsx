import React, { FC, useState, ChangeEvent, useEffect } from "react";
import { search } from "../services/search";
import { Country } from "../interfaces/Country";
import { useDispatch } from "react-redux";
import { addCountry } from "../reducers/countryReducer";
import exchangeicon from '../exchangerate.svg';
import Notification from './Notification';

const SearchForm: FC = () => {
    const [countryResults, setCountryResults] = useState<Country[]>([]);
    const [searchValue, setSearchValue] = useState('');
    const [error, setError] = useState(false);

    const dispatch = useDispatch();

    const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearchValue(e.target.value);
        if (!e.target.value) setCountryResults([]);
    }

    const handleOnClick = (country: Country) => {
        dispatch(addCountry(country))
        setCountryResults([]);
    }

    useEffect(() => {
        const getData = async () => {
            const countries = await search(searchValue);
            if (countries instanceof Error)
                setError(true);
            else
                setError(false)

            if (countries?.length) {
                setCountryResults(countries);
            }
        };
        if (searchValue) getData();

    }, [searchValue]);

    return (
        <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">

                <img className="masthead-avatar mb-5" src={exchangeicon} alt="" />

                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="country-search">


                    <input className="form-control" id="name" type="text" placeholder="Country..." onChange={onChange} value={searchValue} />
                    {countryResults.length ?
                        <ul className="search-result">
                            {countryResults.length ? countryResults.map((country, index) =>
                                <li key={index} onClick={() => handleOnClick(country)}>{country.name}</li>
                            ) : null}
                        </ul> : null}

                    {error ?
                        <Notification text="You need to log in" />
                        : null
                    }

                </div>
            </div>
        </header >

    )
}

export default SearchForm;