import { createSlice } from "@reduxjs/toolkit"




const checkedTwoSlice = createSlice({
    name: 'checkbox',
    initialState: {
        checkedTwo: false
    },
    reducers: {
        setCheckTwo: (state, action) => {
           /*  console.log(action) */
            state.checkedTwo =  action.payload
        },
        deleteCheckedTwo: (state) => {
            state.checkedTwo = false
        }
    }
});

export const { setCheckTwo, deleteCheckedTwo} = checkedTwoSlice.actions;

export default checkedTwoSlice.reducer;