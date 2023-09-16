import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
const initialState1={ iscart:false};
const CartSlice=createSlice({
    name:'cart',
    initialState:initialState1,
    reducers:{
     login(state){
state.iscart=!state.iscart;
  
}
    }
});

export const CartActions=CartSlice.actions;
export default CartSlice;
