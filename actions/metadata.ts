'use server';
import { Metadata } from '@/constants/types';
import { MetaDataSchema } from '@/schemas';

import { z } from 'zod';
import api from '@/data/api/axiosInstance';

export const getMetadata = async (): Promise<Metadata | any> => {
    let error;
    try {
        const res = await api.get(`/metadata`);
        const data = res.data;
        console.log('metadat in action', data);
        return data;
    } catch (e) {
        if (typeof e === 'string') error = e;
        else if (e instanceof Error) error = e.message;
        console.log(e);
        return error;
    }
};

export const updateMetadata = async (
    values: z.infer<typeof MetaDataSchema>
): Promise<Metadata | any> => {
    let error;
    try {
        const res = await api.put(`/metadata`, values);
        const data = res.data;
        //console.log("data after update", data);
        return data;
    } catch (e) {
        if (typeof e === 'string') error = e;
        else if (e instanceof Error) error = e.message;
        console.log('error in update metadata :', error);
        return { error: error };
    }
};
