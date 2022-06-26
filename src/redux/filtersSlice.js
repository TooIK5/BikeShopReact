import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        isHidden: true,
        filters: {
            "cassetes": {
                "cassete12": "12 скоростей",
                "cassete11": "11 скоростей",
                "cassete10": "10 скоростей",
                "cassete9": "8-9 скоростей",
                "cassete8": "6-7 скоростей",
                "anotherParts": "кассеты и прочее",
            },
            "forks": {
                "rigid": "Ригидные",
                "springs": "Пружинно-эластомерные",
                "springs-oil": "Пружинно-масляные",
                "air": "Воздушные"
            }
        },
        currentFilters: {
        },
        currentCategory: null,
    },
    reducers: {
        setForksFilters(state, action) {
            state.currentFilters = state.filters[action.payload];
            state.currentCategory = action.payload;
        },
        setIsHidden(state) {
            state.isHidden = !state.isHidden;
        }
    }
});

export const { setForksFilters, setIsHidden } = filtersSlice.actions;

export default filtersSlice.reducer;