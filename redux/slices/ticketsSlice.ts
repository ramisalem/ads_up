import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { Tickets } from "@/constants/types";

import { closeTickets, getTickets } from "@/actions/helpcenter";

export interface ITickets {
  ticketsList: Tickets[];
  isLoading: boolean;
  hasError: boolean;
  error: string;
}

const initialState: ITickets = {
  ticketsList: [],
  isLoading: true,
  hasError: false,
  error: "",
};

export const getAllTickets = createAsyncThunk<Tickets>(
  "tickets/getAllTickets",
  async (_date, { dispatch }) => {
    try {
      const data = await getTickets();
      return data;
    } catch (e) {
      console.log("error in get tickets");
      throw e;
    }
  }
);
export const closeTicket = createAsyncThunk<Tickets, any>(
  "tickets/closeTickets",
  async (payload: Tickets, { dispatch }) => {
    const data = await closeTickets(payload.uuid);

    return data;
  }
);

export const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    ticketsState: (state: ITickets) => {
      state.hasError = false;

      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllTickets.fulfilled, (state: ITickets, action: any) => {
      state.isLoading = false;
      state.hasError = false;

      state.ticketsList = action.payload;
    });
    builder.addCase(getAllTickets.rejected, (state: ITickets, action: any) => {
      state.isLoading = false;
      state.hasError = true;

      state.error = action.error.message;
    });
    builder.addCase(closeTicket.fulfilled, (state: ITickets, action: any) => {
      state.isLoading = false;
      state.hasError = false;
      state.ticketsList.map((ticket) =>
        ticket.uuid === action.payload.data.uuid
          ? { ...ticket, state: action.payload.data.status }
          : ticket
      );
    });
    builder.addCase(closeTicket.rejected, (state: ITickets) => {
      console.log("reject close tickets");
      state.hasError = true;
      state.isLoading = false;
    });
  },
});
export const { ticketsState } = ticketsSlice.actions;

export const ticketsReducer = ticketsSlice.reducer;
