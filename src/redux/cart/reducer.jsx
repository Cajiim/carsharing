import { createSlice } from "@reduxjs/toolkit"



const modelSlice = createSlice({
    name: 'model',
    initialState: {
        modelInCart: null
    },
    reducers: {
        setModelInCart: (state, action) => {
            
            state.modelInCart = state.modelInCart?.index === action.payload.index ? null : action.payload
        },
        deleteModelFromCart: (state) => {
            state.modelInCart = null
        }
    }
});




export const { setModelInCart, deleteModelFromCart } = modelSlice.actions;
export default modelSlice.reducer;


