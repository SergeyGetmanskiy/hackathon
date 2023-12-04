import { createSlice } from '@reduxjs/toolkit';

export const stepperSlice = createSlice({
    name: 'stepper',
    initialState: {
        activeStep: 0,
    },
    reducers: {
        nextStep: state => {
            state.activeStep += 1;
        },
        backStep: state => {
            state.activeStep -= 1;
        },
    },
});

export const { nextStep, backStep } = stepperSlice.actions;

export const selectActionStep = state => state.stepper.activeStep

export default stepperSlice.reducer;