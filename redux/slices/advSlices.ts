import { getAllAds } from '@/actions/advertisment';
import { AdvType } from '@/constants/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { FaLessThanEqual } from 'react-icons/fa';

export interface IAdvertisment {
    advsList: AdvType[];
    isLoading: boolean;
    hasError: boolean;
    error: string;
}

const initialState: IAdvertisment = {
    advsList: [],
    isLoading: false,
    hasError: false,
    error: ''
};

export const fetchAds = createAsyncThunk<any>('ads/fetchAds', async (_state, { dispatch }) => {
    try {
        // console.log("in get one ads", id);
        const data = await getAllAds();
        console.log('in fetch all ads');
        return data; //{ data: data, uuid: id };
        //    return data?.data.filter((item)=>item.uuid===id)
    } catch (e) {
        console.log('error ', e);
        throw e;
    }
});

export const getOneAdvertisment = createAsyncThunk<any>(
    'ads/getOneAdvertisment',
    async (_id, { dispatch }) => {
        try {
            // console.log("in get one ads", id);
            const data = await getAllAds();

            return data; //{ data: data, uuid: id };
            //    return data?.data.filter((item)=>item.uuid===id)
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
        advsState: (state: IAdvertisment) => {
            state.hasError = false;
            state.error = '';
            state.isLoading = false;
        }
    },

    extraReducers: (builder) => {
        builder.addCase(fetchAds.fulfilled, (state: IAdvertisment, action: any) => {
            state.isLoading = false;
            state.hasError = false;
            state.advsList = action.payload;
        }),
            builder.addCase(
                getOneAdvertisment.fulfilled,
                (state: IAdvertisment, action: any) => {
                    state.isLoading = false;
                    state.hasError = false;
                    state.advsList = action.payload.data;
                    //console.log(action.payload.data);
                    // state.advsList = {
                    //   ...action.payload.data.data.filter(
                    //     (item: AdvType) => item.uuid === action.payload.uuid
                    //   ),
                    // };
                    console.log(state.advsList);
                }
            );
        builder.addCase(getOneAdvertisment.rejected, (state: IAdvertisment, action: any) => {
            state.isLoading = false;
            state.hasError = true;
            console.log('error in getOne adv');
            state.error = action.error.message;
        });
    }
});

export const { advsState } = adsSlice.actions;

export const adsReducer = adsSlice.reducer;
