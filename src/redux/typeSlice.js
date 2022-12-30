import { createSlice } from "@reduxjs/toolkit";
import { getTypes } from "./API/API";
import { convert } from "./dataConverter"

const typeSlice = createSlice({
    name: 'types',
    initialState: {
        status: null,
        error: null,
        types: [],
    },

    reducers: {
        getTypesAction(state, action) {
            state.types = action.payload;
        }
    },

    extraReducers: {
        [getTypes.fulfilled]: (state, action) => {
            state.types = convert(action.payload.categories)
        },
    }
});

export const { getTypesAction } = typeSlice.actions;
export default typeSlice.reducer; 