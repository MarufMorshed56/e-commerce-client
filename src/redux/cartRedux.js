import {createSlice} from '@reduxjs/toolkit'

export const cartSlice = createSlice({
          name:"cart",
          initialState:{
                    products:[],
                    quantity:0,
                    total:0
          },
          reducers:{
                    addProduct:(state,action)=>{
                              state.products.push(action.payload);
                              state.quantity += 1;
                              state.total += action.payload.totalPrice;
                    },
                    deleteProduct:(state,action)=>{
                              state.products = action.payload ;
                              state.quantity -= 1;
                              state.total += action.payload.totalPrice;
                    },
                    updatePrice:(state,action)=>{
                              state.total = action.payload;
                    },
                    updateProduct:(state,action)=>{
                              state.products = action.payload;
                    },
                    clearCart:(state)=>{
                              state.products =[];
                              state.quantity = 0;
                              state.total = 0;
                    }
          }
})

export const {addProduct,deleteProduct,clearCart,updatePrice,updateProduct} = cartSlice.actions

export  default cartSlice.reducer