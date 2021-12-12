import { configureStore, combineReducers} from "@reduxjs/toolkit";

import  cartSliceReducer  from "./cartRedux";

import userSliceReducer from "./userRedux"

//*************** REDUX PERSIST *****************//
import{
          persistStore,
          persistReducer,
} from 'redux-persist'

import storage from 'redux-persist/lib/storage'

const persistConfig = {
          key: 'root',
          version: 1,
          storage,
}
const rootReducer = combineReducers({ user: userSliceReducer, cart: cartSliceReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer)

//****************************************//

export const store = configureStore({
          reducer: persistedReducer,
})

export const persistor = persistStore(store)