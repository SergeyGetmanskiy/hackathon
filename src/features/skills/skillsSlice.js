import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    skillAdded(state, action) {
      state.push(action.payload)
    }
  }
})

export const { skillAdded } = skillsSlice.actions

export default skillsSlice.reducer