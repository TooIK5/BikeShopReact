/* import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import appReducer from "./app-Reducer";

let reducers = combineReducers({
    app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers((applyMiddleware(thunkMiddleware))
));

export default store;

window._store = store;
 */

// file: store.ts
import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice';
import itemsSlice from './itemsSlice';
import filtersSlice from './filtersSlice';
import headerSlice from './headerSlice';

export default configureStore({
  reducer: {
    app: appReducer,
    items: itemsSlice,
    filters: filtersSlice,
    header: headerSlice
  }
})

 