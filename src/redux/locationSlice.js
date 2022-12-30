import { createSlice } from "@reduxjs/toolkit";
import { getLocations } from "./API/API";
import { convert } from "./dataConverter";

const locationsSlice = createSlice({
    name: 'locations',
    initialState: {
        status: null,
        error: null,
        locations: [],
    },

    reducers: {
        convertLocs(state, action) {
            state.types = action.payload;
        }
    },
    
    extraReducers: {
        [getLocations.fulfilled]: (state, action) => {
            state.locations = convert(action.payload.locations);
        },
    }
});

export const { convertLocs } = locationsSlice.actions;
export default locationsSlice.reducer; 