// DUCKS pattern
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      // it's okay to do this because immer(library used inside @reduxjs/toolkit) makes it immutable under the hood
      state.value++;
    },
    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    // decrement
    decrement(state) {
      state.value--;
    },
    // reset
    reset(state) {
      state.value = 0;
    },
  },
});

export const { increment, amountAdded, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
