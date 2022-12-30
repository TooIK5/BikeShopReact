import { createSlice } from "@reduxjs/toolkit";
import { addChat, getDialogs } from "./API/API";

const chatSlice = createSlice({
    name: 'filters',
    initialState: {
        dialogs: [],
        messages: [],
        merror: null
    },

    reducers: {
        setCurrent(state, action) {
            state.currentPage = action.payload;
        },
    },

    extraReducers: {
        [addChat.fulfilled]: (state, action) => {
            state.dialogs.push(action.payload[0]);
        },
        [addChat.rejected]: (state, action) => {
            state.merror = action.payload.message;
        },
        [getDialogs.fulfilled]: (state, action) => {
            state.dialogs = action.payload;
        },
        [getDialogs.rejected]: (state, action) => {
            console.error(action.payload.message)
        }
    }
});

//export const { } = chatSlice.actions;

export default chatSlice.reducer;