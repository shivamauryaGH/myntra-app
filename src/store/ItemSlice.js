import {  createSlice } from "@reduxjs/toolkit";

const itemsSlice=createSlice({
    name:'items',
    initialState:[],
    reducers:{
       addInitialItems:(state,action)=>{
        // console.log("reducer");
           return action.payload;
       },
    }
   });
   export const itemsAction=itemsSlice.actions;

   export default itemsSlice;

   