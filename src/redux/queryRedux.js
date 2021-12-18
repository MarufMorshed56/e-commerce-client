import {createSlice} from '@reduxjs/toolkit'

export const querySlice = createSlice({
          name:"query",
          initialState:{
                    products:[],
          },
          reducers:{
                    addProduct:(state,action)=>{
                              state.products=(action.payload);
                    },
                    
          }
})

export const {addProduct} = querySlice.actions

export  default querySlice.reducer