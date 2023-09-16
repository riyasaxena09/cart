import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
const initialState1={ Items:[],totalQuantity:0};
const ItemSlice=createSlice({
    name:'item',
    initialState:initialState1,
    reducers:{
     addItem:(state,action)=>{
const newItem=action.payload;

const exist=state.Items.find((item)=>item.itemId===newItem.id);
state.totalQuantity++;
console.log(exist)
if(!exist){
    state.Items.push({
        itemId:newItem.id,
        price:newItem.price,
        quantity:1,
        totalPrice:newItem.price,
        name:newItem.title,
    })
}else{
   exist.quantity++;
   exist.totalPrice+=newItem.price;
}
     },
     removeItem:(state,action)=>{
        const I=action.payload;
        console.log(I.id)
        const exist=state.Items.find((item)=>item.itemId===I.id);
        state.changed=true;
        state.totalQuantity--;
        if(exist.quantity===1){
                state.Items=state.Items.filter(item=>item.itemId!==I.id) 
             }
                else{
                  exist.quantity--;
                  exist.totalPrice-=I.price;

                }
             },
          
    }
});

export const ItemActions=ItemSlice.actions;
export default ItemSlice;
