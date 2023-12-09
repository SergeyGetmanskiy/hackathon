import { createSlice } from '@reduxjs/toolkit'

const initialState = '';

const skillsGroupSlice = createSlice({
  name: 'skillsGroup',
  initialState,
  reducers: {
    setSkillsGroupName: (state, action) => action.payload
  }
})

export const { setSkillsGroupName } = skillsGroupSlice.actions

export default skillsGroupSlice.reducer