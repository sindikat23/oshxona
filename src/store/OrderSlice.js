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
            else {
                let current = [...state.value];
                let finded = current.find(
                    (item) => item.client == action.payload.client);
                if (finded) {
                    finded.orders = action.payload.orders
                    state.value = current
                }
                else {
                    current.push(action.payload)
                    state.value = current
                }
            }
        },
        deleteOrder: (state, actions) => {
            console.log("deleteOrder", actions.payload);
            let ord = [...state.value]
            let current_orders = ord.filter(
                (item) => (item.client !== actions.payload.orderId));
            state.value = current_orders
            console.log(current_orders);

        }
    }
})

export const { setOrder, deleteOrder } = OrderSlice.actions

export default OrderSlice.reducer