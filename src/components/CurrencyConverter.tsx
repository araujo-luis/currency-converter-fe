import React, { FC, ChangeEvent, useState, useEffect } from "react";
import { BaseCurrencyRate } from "../interfaces/Currency";
import { useSelector } from "react-redux";
import { selectCurrencyBase } from "../reducers/currencyBaseReducer";

const CurrencyConverter: FC<BaseCurrencyRate> = (props) => {
    const [exchange, setExchange] = useState(0);
    const [exchangeResult, setExchangeResult] = useState(0);
    const { baseCurrencyRate, symbol } = props;
    const { currencyBase } = useSelector(selectCurrencyBase);

    const currencyExchange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const value = parseFloat(e.target.value);
        if (value)
            setExchange(value);
        else
            setExchange(0);
    }

    useEffect(() => {
        setExchangeResult(exchange * (baseCurrencyRate / currencyBase))
    }, [baseCurrencyRate, currencyBase, exchange, setExchange])

    return (
        <div className="form-group row">
            <label htmlFor="converter" className="col-sm-2 col-form-label">SEK</label>
            <div className="col-sm-10">
                <input id="converter" className="form-control" type="text" onChange={currencyExchange} value={exchange} />
            </div>
            <label className="col-sm-12 col-form-label result">{exchangeResult.toFixed(2)} {symbol}</label>
        </div>

    )
}

export default CurrencyConverter;