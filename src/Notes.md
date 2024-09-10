layout design a code
Header
Body ====>side bar   mainContainer      
                                buttonList
                                videocarr


collpase sidebar kept global sapce using redux store
how to install 
npm i @reduxjs/toolkit
npm i react-redux

create one utils folder
store.js
configureStore
create slice
Appslice.js

createSlice({})
name:'app',
initialState:{
    isMenuOpen:true,

},reducers:{
    toogleMenu:(state)=>{
        state.isMenuOPEN
    }
}
export const {toogleMenu}=appSlice.actions;
export default appslice.reducer;
