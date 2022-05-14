import { createSlice } from "@reduxjs/toolkit"




const durationArendSlice = createSlice({
    name: 'duration',
    initialState: {
        durationArend: null
    },
    reducers: {
        setDurationArend: (state, action) => {
           /*  console.log(action) */
            state.durationArend =  action.payload
        },
        deleteDurationArend: (state) => {
            state.durationArend = null
        }
    }
});

export const { setDurationArend, deleteDurationArend} = durationArendSlice.actions;

export default durationArendSlice.reducer;