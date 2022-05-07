import { createSlice } from "@reduxjs/toolkit"



const modelSlice = createSlice({
    name: 'model',
    initialState: {
        modelInCart: []
    },
    reducers: {
        setModelInCart: (state, action) => {
            state.modelInCart.push(action.payload)
        },
        deleteModelFromCart: (state, action) => {
            state.modelInCart = state.modelInCart.filter(cart => cart.id !== action.payload)
        }
    }
});


export const { setModelInCart, deleteModelFromCart } = modelSlice.actions;
export default modelSlice.reducer;