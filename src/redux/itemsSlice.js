import { createSlice } from "@reduxjs/toolkit";
import {
    addItem, getAll,
    updateItem,
    getLiked, getOne, searchItem, getAllForAdmin, approve
} from "./API/API";

const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        status: null,
        count: 0,
        error: null,
        uerror: null,
        ustatus: null,
        currentType: null,
        likedAds: null,
        approvedId: null,
        items: [],
        myItems: [],
        limit: 10,
        page: 1,
    },

    reducers: {
        setCurrentType(state, action) {
            state.currentType = action.payload;
        },

        clearItems(state, action) {
            state.items.length = 0;
        },

        dropUpdateStatus(state, action) {
            state.ustatus = null;
        }
    },

    extraReducers: {
        [addItem.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [addItem.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.myItems = action.payload;
        },
        [addItem.rejected]: (state, action) => {
            state.error = action.payload;
        },
        [getAll.fulfilled]: (state, action) => {
            state.items = action.payload.rows;
            state.count = action.payload.count;
        },
        [updateItem.rejected]: (state, action) => {
            state.uerror = action.payload;
        },
        [updateItem.fulfilled]: (state, action) => {
            state.ustatus = "Обновлено";
        },
        [getLiked.fulfilled]: (state, action) => {
            state.likedAds = action.payload;
        },
        [getOne.rejected]: (state, action) => {
            state.uerror = action.payload;
        },
        [getOne.fulfilled]: (state, action) => {
            state.items.push(action.payload);
        },
        [searchItem.fulfilled]: (state, action) => {
            state.items = action.payload.rows;
            state.count = action.payload.count;
        },
        [getAllForAdmin.rejected]: (state, action) => {
            state.uerror = action.payload;
        },
        [getAllForAdmin.fulfilled]: (state, action) => {
            state.items = action.payload.rows;
            state.count = action.payload.count;
        },
        [approve.fulfilled]: (state, action) => {
            state.approvedId = action.payload.approved;
            state.items = state.items.filter(e => {
                return e.id !== +action.payload.id
            });
        },
    }
});


export const { setCurrentType, clearItems, dropUpdateStatus } = itemsSlice.actions;
export default itemsSlice.reducer; 
