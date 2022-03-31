import {createSlice} from "@reduxjs/toolkit";
import { fetchItems } from "./API/API";

const itemsSlice = createSlice({
    name: 'items',
    initialState: {
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
        [fetchItems.pending]: (state) => {
            state.status = 'loading';
                state.error = null;
        },
        [fetchItems.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.items = action.payload;
        },
        [fetchItems.rejected]: (state, action) => {},
    }
});

 export const {setCurrentPage} = itemsSlice.actions;
export default itemsSlice.reducer;