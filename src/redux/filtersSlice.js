import { createSlice } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        isHidden: true,
        lastSearch: null,
        currentPage: 1,
        lastreq: null
    },
    reducers: {
        setCurrent(state, action) {
            state.currentPage = action.payload;
        },
        setLasteq(state, action) {
            state.lastreq = action.payload;
        },
        setLastreqpage(state, action) {
            state.lastreq.page = action.payload;
        },
        setIsHidden(state) {
            state.isHidden = !state.isHidden;
        },
        setLastSearch(state, action) {
            state.lastSearch = action.payload;
        }
    }
});

export const { setCurrent, setIsHidden, setLasteq, setLastreqpage, setLastSearch } = filtersSlice.actions;

export default filtersSlice.reducer;