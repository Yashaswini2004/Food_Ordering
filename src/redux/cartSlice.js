import { createSlice } from "@reduxjs/toolkit";
const cartslice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        AddItem:(state,action)=>{
            state.push(action.payload);
        }
    }

})
export const {AddItem}=cartslice.actions;
export default cartslice.reducer;