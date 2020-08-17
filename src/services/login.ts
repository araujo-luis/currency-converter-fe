import axios from 'axios';

const { REACT_APP_API_URL } = process.env;
export const login = async (user: string, password: string) => {
   
    try {
        const response = await axios.post(`${REACT_APP_API_URL}/login`, {
            username: user,
            password
        });
        localStorage.setItem('token', response.data.token);
        return response.data;
    } catch (error) {
        console.log('An error ocurred', error);
    }
}