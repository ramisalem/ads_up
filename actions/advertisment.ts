import axios from 'axios';
import { AdvType } from '@/constants/types';
import api from '@/data/api/axiosInstance';
export const getAllAds = async (): Promise<{
    data?: AdvType[];
    isError: boolean;
    errors: string | any | undefined;
}> => {
    let data: AdvType[] | undefined;
    let isError = false;
    let errors = undefined;

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
        console.log('data response from get ads', response.data);
        data = response.data;
    } catch (error: any) {
        isError = true;
        if (axios.isAxiosError(error)) {
            console.log(error.response?.status);
            console.log(error.response?.statusText);
            console.log(error.response?.data.errors);
            errors = error.response?.statusText;
        }
        console.error('error in get ads', error);
        errors = error;
    }

    return { data, isError, errors };
};
