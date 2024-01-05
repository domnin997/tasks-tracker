import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
  reducers: {

  },
  middleware: getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
})

// export default store;