import {createSlice} from "@reduxjs/toolkit";
import { getCategories } from "./API/API";
import { getAsyncAds } from "./API/API";

const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        categories: null,
        items: [{id: 1, price: 200, isLiked: true, createAt: "15.10.2022 13:45", location: "location", description: "Lorem ipsum dolor simp ament ketsss what what what don't don't don't don't bbvbvbvbvbvbvvb", title: "Hub", src: "https://picsum.photos/200"},
        {id: 2, price: 200, isLiked: false, createAt: "15.10.2022 13:45", location: "location", description: "Lorem ipsum dolor simp ament ketsss what what what don't don't don't don't bbvbvbvbvbvbvvb", title: "ggeg", src: "https://picsum.photos/200"},
        {id: 1, price: 200, isLiked: true,  createAt: "15.10.2022 13:45", location: "location", description: "Lorem ipsum dolor simp ament ketsss what what what don't don't don't don't bbvbvbvbvbvbvvb", title: "Hub", src: "https://picsum.photos/200"},
        {id: 2, price: 200, isLiked: false, createAt: "15.10.2022 13:45", location: "location", description: "Lorem ipsum dolor simp ament ketsss what what what don't don't don't don't bbvbvbvbvbvbvvb", title: "ggeg", src: "https://picsum.photos/200"},
        {id: 1, price: 200, isLiked: false, createAt: "15.10.2022 13:45", location: "location", description: "Lorem ipsum dolor simp ament ketsss what what what don't don't don't don't bbvbvbvbvbvbvvb", title: "Hub", src: "https://picsum.photos/200"},
        {id: 2, price: 200, isLiked: false, createAt: "15.10.2022 13:45", location: "location", description: "Lorem ipsum dolor simp ament ketsss what what what don't don't don't don't bbvbvbvbvbvbvvb", title: "ggeg", src: "https://picsum.photos/200"}],
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
