import Appslice from "./appSlice";
import { configureStore } from '@reduxjs/toolkit';
import SearchSlice from "./SearchSlice";

const store = configureStore({
  reducer: {
    app: Appslice, // Ensure that you use the reducer from appSlice,
    search:SearchSlice
  },
});

export default store;
