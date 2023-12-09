import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

const newSkillsSlice = createSlice({
  name: 'newSkills',
  initialState,
  reducers: {
    initialNewSkillsAdded(state, action) {
      return action.payload
    },
  }
})

export const { initialNewSkillsAdded } = newSkillsSlice.actions

export default newSkillsSlice.reducer