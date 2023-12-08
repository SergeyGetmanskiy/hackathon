import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    initialSkillsAdded(state, action) {
      return action.payload
    },
    skillAdded(state, action) {
      state.push(action.payload)
    }
  }
})

export const { initialSkillsAdded, skillAdded } = skillsSlice.actions

export default skillsSlice.reducer