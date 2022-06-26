
import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice';
import itemsSlice from './itemsSlice';
import filtersSlice from './filtersSlice';
import headerSlice from './headerSlice';
import accountSlice from './accountSlice';

export default configureStore({
  reducer: {
    app: appReducer,
    items: itemsSlice,
    filters: filtersSlice,
    header: headerSlice,
    account: accountSlice
  }
})
 
 