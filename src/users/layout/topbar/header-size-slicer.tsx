import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    stateHeaderSize: 0
};

const headerSlice = createSlice({
    name: 'headerSlice',
    initialState,
    reducers: {
        reducerHeaderSize: (state:any, action:PayloadAction<number>)=>{
            state.stateHeaderSize = action.payload;
        }
    }
})

export const {reducerHeaderSize} = headerSlice.actions;
export default headerSlice.reducer;
