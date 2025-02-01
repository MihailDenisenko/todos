import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react';

const initialState = {
  count: 0,
  nameed: 'Mikle',
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count !== 0 ? state.count-- : (state.count = 3);
      state.nameed === 'Mikle' ? (state.nameed = 'Marina') : (state.nameed = 'Mikle');
    },
    test: (state) => {
      state.nameed === 'Mikle' ? (state.nameed = 'Marina') : (state.nameed = 'Mikle');
    },
    incrementByAmount: (state, action) => {
      console.log(action);
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, test } = counterSlice.actions;

export default counterSlice.reducer;
