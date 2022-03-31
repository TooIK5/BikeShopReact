import {createSlice} from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        initialized: false,
        locations: [
            {
                value: 'Минск',
                label: 'Минск',
                children: [
                    {
                        value: 'Советский',
                        label: 'Советский',
                    },
                ],
            },
        ],
        categories: [
            {
                value: 'Вилки',
                label: 'Forks',
                children: [
                    {
                        value: 'Rigid',
                        label: 'Ригидные',
                    },
                ],
            },
        ]
    },
    reducers: {
        setInitialized(state, action) {
            state.initialized = true;
        }
    }
});

export const {setInitialized} = appSlice.actions;
export default appSlice.reducer;