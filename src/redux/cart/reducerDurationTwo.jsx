import { createSlice } from "@reduxjs/toolkit"




const durationArendSliceTwo = createSlice({
    name: 'durationTwo',
    initialState: {
        durationArendTwo: null
    },
    reducers: {
        setDurationArendTwo: (state, action) => {
            state.durationArendTwo =  action.payload
        },
        deleteDurationArendTwo: (state) => {
            state.durationArendTwo = null
        }
    }
});

export const { setDurationArendTwo, deleteDurationArendTwo} = durationArendSliceTwo.actions;

export default durationArendSliceTwo.reducer;