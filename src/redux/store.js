import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';

// Setup redux store

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default store;
