import { configureStore } from "@reduxjs/toolkit";

import onboardingReducer from "../features/onboarding/onboardingSlice";
import skillsReducer from '../features/skills/skillsSlice'
import stepperReducer from '../components/Onboarding/Header/HeaderStepper/stepperSlice';



const store = configureStore({
  reducer: {
    onboarding: onboardingReducer,
    skills: skillsReducer,
    stepper: stepperReducer,
  },
})

console.log(store);

export default store