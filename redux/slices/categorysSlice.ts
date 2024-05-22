import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
    EntityState,
    EntityId,
    createSelector
} from '@reduxjs/toolkit';
import { Categories } from '@/constants/types';
import api from '@/data/api/axiosInstance';
import { RootState } from '../store';

const categoriesAdapter = createEntityAdapter({
    selectId: (category: Categories) => category.uuid
});

export interface ICategory {
    // categories: Categories[];
    // subCategory:Omit<Categories, 'subCategories'>,
    isLoading: boolean;
    hasError: boolean;
    error: string;
}

const initialState = categoriesAdapter.getInitialState({
    // categories: [],
    // subCategory:{},
    isLoading: false,
    hasError: false,
    error: ''
});

export const fetchCategories = createAsyncThunk<ICategory>(
    'cats/fetchCats',
    async (_date, { dispatch }) => {
        try {
            const res = await api.get('/categories');
            // console.log('categories in respons', res.data[0]);
            return res.data;
        } catch (e) {}
    }
);

const categoriesSlice = createSlice({
    name: 'cats',
    initialState: initialState,
    reducers: {
        // getSubCategory(state,action){
        //   state.subCategory=
        // }
    },
    extraReducers(builder) {
        builder.addCase(fetchCategories.fulfilled, (state: any, action: any) => {
            //state.categories = action.payload;
            state.isLoading = false;
            state.categories = action.payload;
            categoriesAdapter.setAll(state, action.payload);
        });
    }
});

//export const { usersState } = usersSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;

export const { selectAll: selectAllCats, selectById: selectCatById } =
    categoriesAdapter.getSelectors<RootState>((state) => state.cats);

export const selectCategories = {
    selectAllCats: (state: RootState) => state.cats,
    selectCatById: (state: RootState, categoryId: string) => selectCatById(state, categoryId)
};
