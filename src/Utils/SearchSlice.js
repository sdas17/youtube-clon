import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:"search",
    initialState:{

    },
    reducers:{
        chacheResults:(state,action)=>{
            // state={...action.payload,...state}
            state = Object.assign(state , action.payload);        }
    },
})
export const {chacheResults}=searchSlice.actions;
export default searchSlice.reducer;

// Cache:

// time complexity tro search =0(n)
//time complexity tro search in object=0(1)


