// const { createSlice } = require("@reduxjs/toolkit");

// const appSlice=createSlice({
//  name:"app",
//  initialState :{
//     isMenuOpen:true
//  },
//  reducers:{
//     togglMenu:(state)=>{
//         state.isMenuOpen=!state.isMenuOpen
//     },
//  },
// });
// export const  {togglMenu}=appSlice.actions;
// export default appSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    isMenuOpen: true
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { toggleMenu } = appSlice.actions;
export default appSlice.reducer;
