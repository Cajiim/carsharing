import { createSlice } from "@reduxjs/toolkit"




const colorSlice = createSlice({
    name: 'color',
    initialState: {
        colorCar: null
    },
    reducers: {
        setColor: (state, action) => {
           /*  console.log(action) */
            state.colorCar =  action.payload
        },
        deleteColor: (state) => {
            state.colorCar = null
        }
    }
});

export const { setColor, deleteColor} = colorSlice.actions;

export default colorSlice.reducer;