import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./ItemSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./BagSlice";

const appstore=configureStore({
reducer:{
    items:itemsSlice.reducer,
    fetchStatus:fetchStatusSlice.reducer,
    bag:bagSlice.reducer,
}
})

export default appstore;