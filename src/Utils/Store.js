import Appslice from "./appSlice";
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    app: Appslice, // Ensure that you use the reducer from appSlice
  },
});

export default store;
