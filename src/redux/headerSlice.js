import {  createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
    name: 'params',
    initialState: {
        searchParameters: {
            location: [null, "Беларусь"]
        }
    },
    reducers: {
        setSearchRequest(state, action) {
            state.searchParameters = action.payload;
        }
    }
});

export const {setSearchRequest} = headerSlice.actions;
export default headerSlice.reducer;