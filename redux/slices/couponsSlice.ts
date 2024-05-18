import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addCoupon, changeCouponStatus, getCoupons } from '@/actions/coupons';
import { z } from 'zod';
import { CupounsSchema } from '@/schemas';

type Coupons = z.infer<typeof CupounsSchema>;
export interface ICoupons {
    couponsList: Coupons[];
    isLoading: boolean;
    hasError: boolean;
    error: string | any;
}

const initialState: ICoupons = {
    couponsList: [],
    isLoading: true,
    hasError: false,
    error: ''
};

export const getALLCoupons = createAsyncThunk<any>(
    'coupons/getAllCoupons',
    async (_data, { dispatch }) => {
        try {
            const data = await getCoupons();

            return data;
        } catch (e: any) {
            throw e?.response?.data;
        }
    }
);
export const addNewCoupon = createAsyncThunk<Coupons, any>(
    'coupons/addNewCoupon',
    async (payload: Coupons, { dispatch }) => {
        try {
            const { data } = await addCoupon(payload);
            return data;
        } catch (e: any) {
            throw e?.respnse.data;
        }
    }
);
export const changecouponStatus = createAsyncThunk<Coupons, any>(
    'coupons/changeCouponStatus',
    async (payload: Coupons, { dispatch }) => {
        try {
            const data = await changeCouponStatus(payload);
            return data;
        } catch (e: any) {
            throw e?.response.data;
        }
    }
);
export const couponsSlice = createSlice({
    name: 'coupons',
    initialState,
    reducers: {
        couponsState: (state: ICoupons) => {
            state.isLoading = false;
            state.hasError = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getALLCoupons.fulfilled, (state: ICoupons, action: any) => {
            state.isLoading = false;
            state.hasError = false;
            state.couponsList = action.payload;
        });
        builder.addCase(getALLCoupons.rejected, (state: ICoupons, action: any) => {
            console.log('error in get coupons actions');
            state.isLoading = false;
            state.hasError = true;
            state.error = action.error.message;
        });
        builder.addCase(addNewCoupon.fulfilled, (state: ICoupons, action: any) => {
            state.isLoading = false;
            state.hasError = false;
            state.couponsList.push(action.payload.data);
        });
        builder.addCase(addNewCoupon.rejected, (state: ICoupons, action: any) => {
            state.hasError = true;
            state.isLoading = false;
            state.error = action.error.message;
        });
        builder.addCase(changecouponStatus.fulfilled, (state: ICoupons, action: any) => {
            state.isLoading = false;
            state.hasError = false;
            state.couponsList.map((coupon) =>
                coupon.uuid === action.payload.data.uuid
                    ? { ...coupon, state: action.payload.data.status }
                    : coupon
            );
        });
    }
});
export const { couponsState } = couponsSlice.actions;
export const couponsReducer = couponsSlice.reducer;
