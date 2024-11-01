import axios from 'axios';
import { BASE_URL } from './apis';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
});

axiosInstance.interceptors.request.use(
    (config) => {
        console.log('Request:', config);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        console.log('Response:', response);
        return response;
    },
    (error) => {
        console.error('Error:', error.response ? error.response.data : 'Network Error');
        return Promise.reject(error);
    }
);

export default axiosInstance;
