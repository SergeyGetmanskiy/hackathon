import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    initialSkillsAdded(state, action) {
      return action.payload
    },
    skillClicked(state, action) {
      const skill = state.find(skill => skill.skillId === action.payload)
      skill.clicked = !skill.clicked;
    },
    skillAdded(state, action) {
      state.push(action.payload)
    },
    skillDeleted(state, action) {
      return state.filter((skill) => skill.skillId !== action.payload)
    },
    learningStatusToggled(state, action) {
      const resource = state
        .find(skill => skill.skillId === action.payload.skillId).resources
        .find(resource => resource.id === action.payload.resourceId);
      resource.completed = !resource.completed; 
    },
  }
})

export const { initialSkillsAdded, skillClicked, skillAdded, skillDeleted, learningStatusToggled } = skillsSlice.actions

export default skillsSlice.reducer