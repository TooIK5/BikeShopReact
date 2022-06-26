import { createAsyncThunk } from "@reduxjs/toolkit";
import * as axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8080/',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const authApi = {
    registration(username, password) {
        return instance.post(`users`, { username, password })
    },
    logIn(username, password) {
        return instance.get(`auth`,  {
            auth: {
              username: username,
              password: password
            }
          })
    },
    logOut() {
        return instance.delete(`auth/login`)
    }
};

export const categoriesApi = {
    getCategories() {
        return instance.get(`categories`)
    }
};

export const advertisementsApi = {
    getAds(locationId, categoryId) {
        return instance.get(`advertisements?location=${locationId}&category=${categoryId}`)
    }
};

export const getAsyncAds = createAsyncThunk(
    'items/Ads',
    async function(values, {rejectWithValue}) {
        try {
            const responce = await advertisementsApi.getAds(values.locationId, values.categoryId);
            const data = responce.data;      
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getCategories = createAsyncThunk(
    'items/categories',
    async function(values, {rejectWithValue}) {
        try {
            const responce = await categoriesApi.getCategories();
            const data = responce.data;      
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const registration = createAsyncThunk(
    'account/registration',
    async function(values, {rejectWithValue}) {
        try {
            const responce = await authApi.registration(values.username, values.password);
            const data = responce.data;      
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const logIn = createAsyncThunk(
    'account/logIn',
    async function(values, {rejectWithValue}) {
        try {
            const responce = await authApi.logIn(values.username, values.password);
            const data = responce.data; 
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
