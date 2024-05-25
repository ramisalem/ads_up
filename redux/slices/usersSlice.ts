import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AdUsers } from "@/constants/types";
import api from "@/data/api/axiosInstance";

export interface IUsers {
    usersList: AdUsers[];
    user: AdUsers | null;
    isLoading: boolean;
    hasError: boolean;
    error: string;
}

const initialState: IUsers = {
    usersList: [],
    user: null,
    isLoading: false,
    hasError: false,
    error: "",
};

export const fetchUsers = createAsyncThunk<IUsers>(
    "users/fetchUsers",
    async (_date, { dispatch }) => {
        try {
            const res = await api.get("/users");
            return res.data;
        } catch (e) {
            console.log(e);
            return e;
        }
    },
);

const usersSlice = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.pending, (state: IUsers, action: any) => {
            state.isLoading = true;
            state.hasError = false;
            // state.usersList = action.payload;
        });
        builder.addCase(fetchUsers.fulfilled, (state: IUsers, action: any) => {
            state.isLoading = false;
            state.hasError = false;
            state.usersList = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state: IUsers, action: any) => {
            state.isLoading = false;
            state.hasError = true;
            state.error = action.payload?.message;
            // state.usersList = action.payload;
        });
    },
});

//export const { usersState } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;
