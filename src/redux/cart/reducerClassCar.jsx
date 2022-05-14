import { createSlice } from "@reduxjs/toolkit"




const classSlice = createSlice({
    name: 'classCar',
    initialState: {
        classCar: null
    },
    reducers: {
        setClass: (state, action) => {
           /*  console.log(action) */
            state.classCar =  action.payload
        },
        deleteClass: (state) => {
            state.classCar = null
        }
    }
});

export const { setClass, deleteClass} = classSlice.actions;

export default classSlice.reducer;