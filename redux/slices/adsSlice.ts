import { fetchOneAd, getAllAds } from '@/actions/advertisment';
import { AdvType } from '@/constants/types';
import api from '@/data/api/axiosInstance';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface IAdvertisment {
    adsList: AdvType[];
    detailedAd: AdvType | undefined;
    isLoading: boolean;
    hasError: boolean;
    error: string;
}

const initialState: IAdvertisment = {
    adsList: [],
    detailedAd: undefined,
    isLoading: false,
    hasError: false,
    error: ''
};

export const fetchAds = createAsyncThunk('ads/fetchAds', async (_state, { dispatch }) => {
    try {
        const response = await getAllAds();
        // await api.get('/ads', {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // });

        return response;
    } catch (e) {
        console.log('error ', e);
        throw e;
    }
});

export const getOneAdvertisment = createAsyncThunk<any, any>(
    'ads/getOneAdvertisment',
    async (payload: any) => {
        try {
            const data = await api.get(`/ads?id=${payload}`);
            return data.data;
        } catch (e) {
            console.log('error ', e);
            throw e;
        }
    }
);
export const adsSlice = createSlice({
    name: 'ads',
    initialState,
    reducers: {
        adsState: (state: IAdvertisment) => {
            state.hasError = false;
            state.error = '';
            state.isLoading = false;
        }
    },

    extraReducers: (builder) => {
        builder.addCase(fetchAds.pending, (state: IAdvertisment, action: any) => {
            state.isLoading = true;
            state.hasError = false;
        }),
            builder.addCase(fetchAds.fulfilled, (state: IAdvertisment, action: any) => {
                state.isLoading = false;
                state.hasError = false;
                state.adsList = action.payload;
            }),
            // builder.addCase(
            //     getOneAdvertisment.pending,
            //     (state: IAdvertisment, action: any) => {
            //         state.isLoading = true;
            //         state.hasError = false;
            //     }
            // );
            builder.addCase(
                getOneAdvertisment.pending,
                (state: IAdvertisment, action: any) => {
                    state.isLoading = true;
                    state.hasError = false;
                    console.log('get one add is pending');
                }
            );
        builder.addCase(getOneAdvertisment.fulfilled, (state: IAdvertisment, action: any) => {
            state.isLoading = false;
            state.hasError = false;
            state.detailedAd = action.payload[0];
        });
        builder.addCase(getOneAdvertisment.rejected, (state: IAdvertisment, action: any) => {
            state.isLoading = false;
            state.hasError = true;
            state.error = action.error.message;
        });
    }
});

export const { adsState } = adsSlice.actions;

export const adsReducer = adsSlice.reducer;
