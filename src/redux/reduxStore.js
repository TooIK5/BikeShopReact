
import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice';
import itemsSlice from './itemsSlice';
import filtersSlice from './filtersSlice';
import headerSlice from './headerSlice';
import accountSlice from './accountSlice';
import typeSlice from './typeSlice';
import locationsSlice from './locationSlice';
import chatSlice from './chatSlice';

export default configureStore({
  reducer: {
    app: appReducer,
    items: itemsSlice,
    filters: filtersSlice,
    header: headerSlice,
    account: accountSlice,
    types: typeSlice,
    locations: locationsSlice,
    chat: chatSlice
  }
})
 
 