import { createSlice } from '@reduxjs/toolkit'

const initialState = {};

const skillSlice = createSlice({
  name: 'skill',
  initialState,
  reducers: {
    setSkill: (state, action) => action.payload
  }
})

export const { setSkill } = skillSlice.actions

export default skillSlice.reducer