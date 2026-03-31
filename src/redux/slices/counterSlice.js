import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    reducers:{
        increment: (state) => {
            state.value += 1
        },

        decrement: (state) => {
            state.value -= 1
        },

        incrementBy5: (state) => {
            state.value += 5;
        },

        incrementBy10: (state) => {
            state.value += 10;
        },

        // incrementAmount: (state) => {
        //     state.value += 10;
        // }

    }
})

export const {increment, decrement} = counterSlice.actions
export default counterSlice.reducer