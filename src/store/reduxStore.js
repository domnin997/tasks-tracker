import {configureStore} from '@reduxjs/toolkit';
import { tasksReducer } from '../components/tasksListItem/tasksSlice.js';

export const store = configureStore({
  reducer: {
    tasksReducer,
  },
  // middleware: getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
})