import axiosInstance from './axios';

export const getRequest = async (url: string, params = {}) => {
    try {
        const response = await axiosInstance.get(url, { params });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const postRequest = async (url: string, data: any) => {
    try {
        const response = await axiosInstance.post(url, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const putRequest = async (url: string, data: any) => {
    try {
        const response = await axiosInstance.put(url, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteRequest = async (url: string) => {
    try {
        const response = await axiosInstance.delete(url);
        return response.data;
    } catch (error) {
        throw error;
    }
};
