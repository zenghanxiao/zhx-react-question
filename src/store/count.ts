import { createSlice } from '@reduxjs/toolkit'

export interface CountType {
  value: number
}

const INIT_STATE = {
  value: 100,
}

export const countSlice = createSlice({
  name: 'count',
  initialState: INIT_STATE,
  reducers: {
    increase(state) {
      state.value += 1
    },
    decrease(state) {
      state.value -= 1
    },
  },
})

export const { increase, decrease } = countSlice.actions

export default countSlice.reducer
