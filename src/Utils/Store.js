import Appslice from "./appSlice";
import { configureStore } from '@reduxjs/toolkit';
import SearchSlice from "./SearchSlice";
import CharSlice from "./CharSlice";

const store = configureStore({
  reducer: {
    app: Appslice, // Ensure that you use the reducer from appSlice,
    search:SearchSlice,
    chat:CharSlice
  },
});

export default store;
