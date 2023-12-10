import { configureStore } from "@reduxjs/toolkit";

import onboardingReducer from "../features/onboarding/onboardingSlice";
import skillsGroupReducer from '../features/skills/skillsGroupSlice';
import skillsReducer from '../features/skills/skillsSlice';
import newSkillsReducer from "../features/skills/newSkillsSlice";
import stepperReducer from '../components/Onboarding/Header/HeaderStepper/stepperSlice';

const store = configureStore({
  reducer: {
    onboarding: onboardingReducer,
    skillsGroup: skillsGroupReducer,
    skills: skillsReducer,
    newSkills: newSkillsReducer,
    stepper: stepperReducer,
  },
})

console.log(store);

export default store