import {createSlice} from "@reduxjs/toolkit";
import { getCategories } from "./API/API";
import { getAsyncAds } from "./API/API";

const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        categories: null,
        items: [],
        currentPage: 1,
        pageSize: 20,
        status: null,
        error: null
    },
    reducers: {
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
        }
    },
    extraReducers: {
        [getCategories.pending]: (state) => {
            state.status = 'loading';
                  state.error = null;
        },
        [getCategories.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.categories = action.payload;
        }, 
        [getCategories.rejected]: (state, action) => {
                  state.error = action.payload;
        },
        [getAsyncAds.pending]: (state) => {
            state.status = 'loading';
                  state.error = null;
        },
        [getAsyncAds.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.items = action.payload;
        }, 
        [getAsyncAds.rejected]: (state, action) => {
                  state.error = action.payload;
        },
    }
});

export const {setCurrentPage} = itemsSlice.actions;
export default itemsSlice.reducer; 
