import { combineReducers, configureStore } from '@reduxjs/toolkit'
import OrderSlice from './OrderSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'

const orderConfig = {
    key: "order",
    storage
};

const RootReducer = combineReducers({
    OrderSlice: persistReducer(orderConfig, OrderSlice)
})

export const store = configureStore({
    reducer: RootReducer
})

export const persiststore = persistStore(store)