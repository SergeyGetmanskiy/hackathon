import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../components/Counter/CounterSlice'


export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})