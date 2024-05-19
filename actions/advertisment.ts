'use server';
import axios from 'axios';
import { AdvType } from '@/constants/types';
import api from '@/data/api/axiosInstance';

export const getAllAds = async (): Promise<any> => {
    try {
        const response = await api.get(
            '/ads',
            //"https://65f372c4105614e654a089c4.mockapi.io/api/v1/ads",
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        return response.data;
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            console.log('errors in fetch ads', error.response?.status);
            console.log(error.response?.statusText);
            console.log(error.response?.data);
            return error.response?.statusText;
        }
        console.error('error in get ads', error);
        return error;
    }

    // return { data, isError, errors };
};
export const fetchOneAd = async (id: string): Promise<any> => {
    try {
        const response = await api.get('/ads', {
            params: {
                id: id
            },
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('data response from get one ads', response.data);
        return response.data;
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            console.log('errors in fetch one ads', error.response?.status);
            console.log(error.response?.statusText);
            console.log(error.response?.data);
            return error.response?.statusText;
        }
        console.error('error in get one ads', error);
        return error;
    }

    // return { data, isError, errors };
};
