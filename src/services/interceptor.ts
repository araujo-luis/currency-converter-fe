import axios from 'axios';

const { REACT_APP_API_URL } = process.env;

const interceptor = () => {

    axios.interceptors.request.use(
        config => {
            const { origin } = new URL(config.url || '');
            const allowedOrigins = [REACT_APP_API_URL];
            const token = localStorage.getItem('token');
            if (allowedOrigins.includes(origin)) {
                config.headers.authorization = `Bearer ${token}`;
            }
            return config;
        },
        error => {
            return Promise.reject(error);
        }
    );
}

export default interceptor;