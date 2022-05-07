
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count: 0,

};
const counterReducer = createSlice({
    name: "counter",
    initialState,
    reducers: {
        incrementCounter: (state, action) => {
            state.count = action.payload
        },
        decrementCounter: (state, action) => {
            state.count = action.payload
        }
    }
});
export const { incrementCounter, decrementCounter } = counterReducer.actions
export default counterReducer.reducer