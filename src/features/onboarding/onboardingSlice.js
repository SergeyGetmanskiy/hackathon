import { createSlice } from '@reduxjs/toolkit'

const initialState = false;

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    toggle: (state) => !state,
  }
})

export const { toggle } = onboardingSlice.actions

export default onboardingSlice.reducer