import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    value: []
}

const OrderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setOrder: (state, action) => {
            if (state.value.length == 0) {
                const current = [...state.value]
                current.push(action.payload)
                state.value = current
            }
            else{
                let current = [...state.value];
                let finded = current.find((item)=>(item.client == action.payload.client));
                if(finded){
                    finded.orders = action.payload.orders
                    state.value = current                
                }
                else{
                    current.push(action.payload)
                    state.value = current
                }
            }
        }
    }
})

export const { setOrder } = OrderSlice.actions

export default OrderSlice.reducer