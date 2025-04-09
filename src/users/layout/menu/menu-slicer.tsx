import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    stateToggleMnu: ''
}

const menuSlice = createSlice({
    name: 'menuSlice',
    initialState,
    reducers: {
        reducerToggleButton: (state:any, action)=>{
            if(state.stateToggleMnu === '') {
                state.stateToggleMnu = action.payload;
            } else {
                state.stateToggleMnu = '';
            }
        }
    }
});

export const {reducerToggleButton} = menuSlice.actions;
export default menuSlice.reducer;