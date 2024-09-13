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

//routing 
//use searchparam
//redux
//hoc
======================================================== machine round code
hoc higher order component it takes component  doing some enhance ment and it return a component
debouncing and thorating suppose if we pass is very fast it skip some evernt is know as debouncing and thorating

#impo
Debouncing:
typing slow = 200 ms;
typing fast =30ms;


Perfomance:
 - iphone pro max =14 letter *1000 = 14000
 with debouncing = 3 api *1000=30000

 Debouncing with 200 ms 
 -if difference between 2 key strokes is <200 ms -Decaline>
 > 200 ms make an api call


 <!-- 
 ****
 
 search using live api and search using cache and seach using deboucning

 
 
 ** -->

 press I render component it will the useeffect start timer make an api after 200 ms suppose if even before 200 ms press item button it will bascially destroy method when destory method it will call useffect method method


 nested level comment


 //// use memos and use callback use ref
 use memos to increase performance cached result between re render  when 


 
