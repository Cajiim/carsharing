import { createSlice } from "@reduxjs/toolkit"




const checkedOneSlice = createSlice({
    name: 'checkbox',
    initialState: {
        checkedOne: false
    },
    reducers: {
        setCheckOne: (state, action) => {
           /*  console.log(action) */
            state.checkedOne =  action.payload
        },
        deleteCheckedOne: (state) => {
            state.checkedOne = false
        }
    }
});

export const { setCheckOne, deleteCheckedOne} = checkedOneSlice.actions;

export default checkedOneSlice.reducer;