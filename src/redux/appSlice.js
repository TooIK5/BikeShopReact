import {createSlice} from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        initialized: false,
    },
    reducers: {
        setInitialized(state, action) {
            state.initialized = true;
        }
    }
});

export const {setInitialized} = appSlice.actions;
export default appSlice.reducer;