import { configureStore } from "@reduxjs/toolkit";

import counterReducer from '../components/Counter/CounterSlice';
import stepperReducer from '../components/Onboarding/Header/HeaderStepper/stepperSlice';


export default configureStore({
  reducer: {
    counter: counterReducer,
    stepper: stepperReducer,
  },
})