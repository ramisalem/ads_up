import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addCoupon, getCoupons } from "@/actions/coupons";
import { z } from "zod";
import { CupounsSchema } from "@/schemas";


type Coupons = z.infer<typeof CupounsSchema>;
export interface ICoupons {
    couponsList: Coupons[];
    isLoading: boolean;
    hasError: boolean;
}

const initialState: ICoupons = {
    couponsList: [],
    isLoading: true,
    hasError: false,
};

export const getALLCoupons = createAsyncThunk<any>(
    "coupons/getAllCoupons",
    async (_data, { dispatch }) => {
        const data = await getCoupons();
        return data;
    }
);
export const addNewCoupon = createAsyncThunk<Coupons, any>(
    "coupons/addNewCoupon",
    async (payload: Coupons, { dispatch }) => {
        const { data } = await addCoupon(payload);

        return data;
    }
);

export const couponsSlice = createSlice({
    name: "coupons",
    initialState,
    reducers: {
        couponsState: (state: ICoupons) => {
            state.isLoading = false;
            state.hasError = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getALLCoupons.fulfilled, (state: ICoupons, action: any) => {
            state.isLoading = false;
            state.hasError = false;
            state.couponsList = action.payload;
        });
        builder.addCase(addNewCoupon.fulfilled, (state: ICoupons, action: any) => {
            state.isLoading = false;
            state.hasError = false;
            state.couponsList.push(action.payload.data);
        });
        builder.addCase(addNewCoupon.rejected, (state: ICoupons) => {
            state.hasError = true;
            state.isLoading = false;
        });
    },
});
export const { couponsState } = couponsSlice.actions;
export const couponsReducer = couponsSlice.reducer;
