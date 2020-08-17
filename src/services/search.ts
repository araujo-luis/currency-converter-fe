import axios, { CancelTokenSource } from 'axios';
import { Country } from '../interfaces/Country';

const { REACT_APP_API_URL } = process.env;
let requestToken: CancelTokenSource;

export const search = async (value: string) => {
    if (!value) {
        console.log('novalue');
        return [];
    }
    if (requestToken) {
        console.log('reqeust canceled', requestToken)
        requestToken.cancel();

    }
    requestToken = axios.CancelToken.source()
    try {
        const countries = await axios.get<Country[]>(`${REACT_APP_API_URL}/search/${value}`, {
            cancelToken: requestToken.token,
           
        });
        return countries.data;
    } catch (error) {
        console.log('An error ocurred', error);
        return error;
    }
}