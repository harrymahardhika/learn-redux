import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    setCounter(state, action) {
      state.count = action.payload ?? 0
    },
    increment(state, action) {
      state.count += action.payload ?? 1
    },
    decrement(state, action) {
      state.count -= action.payload ?? 1
    }
  }
})

export const { setCounter, increment, decrement } = counterSlice.actions

export default counterSlice.reducer
