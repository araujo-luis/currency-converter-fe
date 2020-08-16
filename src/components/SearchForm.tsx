import React, { FC, useState, ChangeEvent, useEffect } from "react";
import { search } from "../services/search";
import { Country } from "../interfaces/Country";
import { useDispatch, useSelector } from "react-redux";
import { selectedCountries, addCountry } from "../reducers/countryReducer";

const SearchForm: FC = () => {
    const [countryResults, setCountryResults] = useState<Country[]>([]);
    const [loading, setLoading] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const dispatch = useDispatch();

    const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearchValue(e.target.value);
    }

    const handleOnClick = (country: Country) => {
       dispatch(addCountry(country))
        
    }

    useEffect(() => {
        setLoading(true);
        const getData = async () => {
            const countries = await search(searchValue);
            console.log('returned value', countries);
            setLoading(false);
            if (countries?.length) {
                setCountryResults(countries);
            }
        };
        getData();

    }, [searchValue]);

    return (
        <div>

            <input type="text" onChange={onChange} value={searchValue} />
            <ul>
                {countryResults.length ? countryResults.map((country, index) =>
                    <li key={index} onClick={() => handleOnClick(country)}>{country.name}</li>
                ) : null}
            </ul>
        </div>
    )
}

export default SearchForm;