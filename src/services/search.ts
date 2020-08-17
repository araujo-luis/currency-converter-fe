import axios, { CancelTokenSource } from 'axios';
import { Country } from '../interfaces/Country';

const api = 'http://localhost:3000/search';

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
        const countries = await axios.get<Country[]>(`${api}/${value}`, {
            cancelToken: requestToken.token,
           
        });
        return countries.data;
    } catch (error) {
        console.log('An error ocurred', error);
        return error;
    }
}