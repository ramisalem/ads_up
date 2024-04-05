import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//import { Metadata } from "@/constants/types";

import { getMetadata, updateMetadata } from "@/actions/metadata";
import { MetaDataSchema } from "@/schemas";
import { z } from "zod";


type Metadata = z.infer<typeof MetaDataSchema>;

export interface IMetaData {
    metadata: Metadata;
    isLoading: boolean;
    hasError: boolean;
}

const initialState: IMetaData = {
    metadata: {
        aboutAr: "",
        aboutEn: "",
        termsAndConditionsAr: "",
        termsAndConditionsEn: "",
        privacyPolicyAr: "",
        privacyPolicyEn: "",
    },
    isLoading: true,
    hasError: false,
};

export const getMetaData = createAsyncThunk<Metadata>(
    "metadata/getMetaData",
    async (_data, { dispatch }) => {


        const data = await getMetadata();

        return data;
    }
);

export const updateMetaData = createAsyncThunk<Metadata, any>('metadata/updateMetadata', async (payload: Metadata, { dispatch }) => {
    console.log('in update metadata action');

    const { data } = await updateMetadata(payload)

    return data;
});

export const metadataSlice = createSlice({
    name: "metadata",
    initialState,
    reducers: {
        metadataState: (state: IMetaData) => {
            state.isLoading = false;
            state.hasError = false;
        },
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
            state.metadata = action.payload.data;
        });
        builder.addCase(updateMetaData.rejected, (state: IMetaData) => {
            state.hasError = true;
            state.isLoading = false;
        });
    },
});
export const { metadataState } = metadataSlice.actions;
export const metadataReducer = metadataSlice.reducer;
