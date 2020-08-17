import axios from 'axios';

const api = 'http://localhost:3000/login';

export const login = async (user: string, password: string) => {
   
    try {
        const response = await axios.post(api, {
            username: user,
            password
        });
        localStorage.setItem('token', response.data.token);
        return response.data;
    } catch (error) {
        console.log('An error ocurred', error);
    }
}