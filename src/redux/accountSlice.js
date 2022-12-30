import { createSlice } from "@reduxjs/toolkit";
import { registration, logIn, auth, update, getMyAds, deleteItem } from "./API/API";

const accountSlice = createSlice({
    name: 'account',
    initialState: {
        user: null,
        updateError: null,
        derror: null,
        dstatus: "danger",
        ads: [],
        currentAds: [],
        editAd: {}
    },

    reducers: {
        
    },

    extraReducers: {
        [registration.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [registration.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.user = action.payload.user;
            localStorage.setItem('token', action.payload.token);
            location.reload();
        },
        [registration.rejected]: (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        },
        [logIn.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [logIn.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.user = action.payload.user;
            if (JSON.parse(localStorage.getItem("rememberMe"))) {
                localStorage.setItem('token', action.payload.token);
            } else {
                localStorage.setItem('token', null);
                sessionStorage.setItem("token", action.payload.token)
            }
            location.reload();
        },
        [logIn.rejected]: (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        },
        [auth.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.user = action.payload.user;
        },
        [update.rejected]: (state, action) => {
            state.status = "rejected";
            state.updateError = action.payload;
        },
        [update.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.user = action.payload;
            state.updateError = null;
        },
        [getMyAds.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.ads = action.payload;
        },
        [deleteItem.rejected]: (state, action) => {
            state.derror = action.payload;
        },
        [deleteItem.pending]: (state, action) => {
            state.dstatus = "loading";
        },
        [deleteItem.fulfilled]: (state, action) => {
            state.dstatus = "danger";
            let id = +action.payload.id;
            state.ads.forEach((e, i) => {
                if (e.id === id) {
                    state.ads.splice(i, 1);
                }
            });
        },
    }
});

export const { setCurrentAds, setEditAd } = accountSlice.actions;
export default accountSlice.reducer;