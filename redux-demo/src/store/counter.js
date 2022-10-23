import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounterField: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounterField = !state.showCounterField;
    },
  },
});

export default counterSlice.reducer;
export const counterActions = counterSlice.actions;
