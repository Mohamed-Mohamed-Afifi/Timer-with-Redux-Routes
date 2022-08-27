import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
    name: 'count',
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {
            state.count++
        },
        decrement: (state) => {
            state.count--;
        },
        reset: (state) => {
            state.count = 0;
        }
    }
})
export const { increment, decrement, reset } = countSlice.actions;
export default countSlice.reducer;