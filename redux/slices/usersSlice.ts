import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Users } from '@/constants/types';
import api from '@/data/api/axiosInstance';

export interface IUsers {
    users: Users[];
    user: Users | null;
    isLoading: boolean;
    hasError: boolean;
    error: string;
}

const initialState: IUsers = {
    users: [],
    user: null,
    isLoading: false,
    hasError: false,
    error: ''
};

export const fetchUsers = createAsyncThunk<IUsers>(
    'users/fetchUsers',
    async (_date, { dispatch }) => {
        try {
            const res = await api.get('/users');
            return res.data;
        } catch (e) {}
    }
);

const usersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state: IUsers, action: any) => {
            state.users = action.payload;
        });
    }
});

//export const { usersState } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;
