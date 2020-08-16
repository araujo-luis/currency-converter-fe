import React, { FC, ChangeEvent, useState, useEffect } from "react";
import { BaseCurrencyRate } from "../interfaces/Currency";
import { useSelector } from "react-redux";
import { selectCurrencyBase } from "../reducers/currencyBaseReducer";

const CurrencyConverter: FC<BaseCurrencyRate> = (props) => {
    const [exchange, setExchange] = useState(0);
    const [exchangeResult, setExchangeResult] = useState(0);
    const { baseCurrencyRate } = props;
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
        <span>
            <input type="text" onChange={currencyExchange} value={exchange} />
            {exchangeResult}
        </span>
    )
}

export default CurrencyConverter;