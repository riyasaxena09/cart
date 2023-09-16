import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./cartred";
import ItemSlice from "./items";
const store=configureStore({
    reducer:{com1:CartSlice.reducer,com2:ItemSlice.reducer},
});
export default store;