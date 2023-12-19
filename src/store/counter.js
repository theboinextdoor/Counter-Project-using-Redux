import {createSlice} from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: 'counter',
    initialState: { counterVal: 0 },
    reducers: {
        increment: (state) => {
            state.counterVal++
        },
        decrement: (state) => {
            state.counterVal--
        },
        reset: (state) => {
            state.counterVal = 0
        },
        add: (state, action) => {
            state.counterVal += Number(action.payload)
        },
        subtract: (state, action) => {
            state.counterVal -= Number(action.payload)
        },
        multiplication: (state, action) => {
            state.counterVal *= Number(action.payload)
        },
        divide: (state, action) => {
            state.counterVal /= Number(action.payload)
        }
    }
})

export const counterAction = counterSlice.actions
export default counterSlice;
