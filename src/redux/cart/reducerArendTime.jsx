import { createSlice } from "@reduxjs/toolkit"




const arendTimeSlice = createSlice({
    name: 'price',
    initialState: {
        arendTime: null
    },
    reducers: {
        setArendTime: (state, action) => {
           /*  console.log(action) */
            state.arendTime =  action.payload
        },
        deleteArendTime: (state) => {
            state.arendTime = null
        }
    }
});

export const { setArendTime, deleteArendTime} = arendTimeSlice.actions;

export default arendTimeSlice.reducer;