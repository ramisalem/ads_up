import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

//import { Metadata } from "@/constants/types";

import { getMetadata, updateMetadata } from '@/actions/metadata';
import { MetaDataSchema } from '@/schemas';
import { z } from 'zod';
import { errorToJSON } from 'next/dist/server/render';

type Metadata = z.infer<typeof MetaDataSchema>;

export interface IMetaData {
    metadata: Metadata;
    isLoading: boolean;
    hasError: boolean;
    errors: any;
}

const initialState: IMetaData = {
    metadata: {
        aboutAr: '',
        aboutEn: '',
        termsAndConditionsAr: '',
        termsAndConditionsEn: '',
        privacyPolicyAr: '',
        privacyPolicyEn: ''
    },
    isLoading: false,
    hasError: false,
    errors: []
};

export const getMetaData = createAsyncThunk<Metadata>(
    'metadata/getMetaData',
    async (_data, { dispatch }) => {
        console.log('in get metadata');
        const data = await getMetadata();
        return data;
    }
);

export const updateMetaData = createAsyncThunk<Metadata, any>(
    'metadata/updateMetadata',
    async (payload: Metadata, { dispatch }) => {
        const data = await updateMetadata(payload);

        return data;
    }
);

export const metadataSlice = createSlice({
    name: 'metadata',
    initialState,
    reducers: {
        metadataState: (state: IMetaData) => {
            state.isLoading = false;
            state.hasError = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getMetaData.fulfilled, (state: IMetaData, action: any) => {
            state.isLoading = false;
            state.hasError = false;
            state.metadata = action.payload;
        });
        builder.addCase(updateMetaData.fulfilled, (state: IMetaData, action: any) => {
            state.isLoading = false;
            state.hasError = false;
            state.metadata = action.payload;
        });
        builder.addCase(updateMetaData.rejected, (state: IMetaData, action: any) => {
            console.log('rejected update metadata');
            state.hasError = true;
            state.isLoading = false;
            state.errors.push(...action.payload);
        });
    }
});
export const { metadataState } = metadataSlice.actions;
export const metadataReducer = metadataSlice.reducer;
