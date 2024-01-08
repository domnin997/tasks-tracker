import {configureStore} from '@reduxjs/toolkit';
import tasks from '../components/tasksListItem/tasksSlice.js';

export const store = configureStore({
  reducer: {
    tasks,
  },
  devTools: process.env.NODE_ENV !== 'production',
})