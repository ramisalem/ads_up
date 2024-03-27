import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Tickets } from "@/constants/types";
import { CupounsSchema } from "@/schemas/index"
import { addCoupon, getCoupons } from "@/actions/coupons";
import { staticGenerationAsyncStorage } from "next/dist/client/components/static-generation-async-storage.external";
import { closeTickets, getTickets } from "@/actions/helpcenter";


export interface ITickets {
    ticketsList: Tickets[],
    isLoading: boolean,
    hasError: boolean,
}

const initialState: ITickets = {
    ticketsList: [],
    isLoading: true,
    hasError: false,
};

export const getAllTickets = createAsyncThunk<Tickets>('tickets/getAllTickets', async (_date, { dispatch }) => {
    console.log('in get tickets action');
    //state.isLoading=true;
    const data = await getTickets();
    return data;
});
export const closeTicket = createAsyncThunk<Tickets, any>('tickets/closeTickets', async (payload: Tickets, { dispatch }) => {
    console.log('in close  tickets action');
    // console.log({ payload });
    //state.isLoading=true;
    const data = await closeTickets(payload.uuid);
    //console.log('data after new add action', data)
    return data;
});

export const ticketsSlice = createSlice({
    name: "tickets",
    initialState,
    reducers: {
        ticketsState: (state: ITickets) => {
            state.hasError = false;

            state.isLoading = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllTickets.fulfilled, (state: ITickets, action: any) => {
            console.log('in reducer');
            state.isLoading = false;
            state.hasError = false;
            state.ticketsList = action.payload;
        });
        builder.addCase(closeTicket.fulfilled, (state: ITickets, action: any) => {
            console.log('ain close ticket', action.payload.data);
            state.isLoading = false;
            state.hasError = false;
            state.ticketsList.map((ticket) => ticket.uuid === action.payload.data.uuid ? { ...ticket, state: action.payload.data.status } : ticket)
        });
        builder.addCase(closeTicket.rejected, (state: ITickets) => {
            console.log('reject close tickets')
            state.hasError = true;
            state.isLoading = false;
        });
    },
});
export const { ticketsState } = ticketsSlice.actions;
//export const couponsSlice.actions;
export const ticketsReducer = ticketsSlice.reducer;