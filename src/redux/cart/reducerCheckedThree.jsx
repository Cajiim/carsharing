import { createSlice } from "@reduxjs/toolkit"




const checkedThreeSlice = createSlice({
    name: 'checkbox',
    initialState: {
        checkedThree: false
    },
    reducers: {
        setCheckThree: (state, action) => {
           /*  console.log(action) */
            state.checkedThree =  action.payload
        },
        deleteCheckedThree: (state) => {
            state.checkedThree = false
        }
    }
});

export const { setCheckThree, deleteCheckedThree} = checkedThreeSlice.actions;

export default checkedThreeSlice.reducer;