import { Step, Stepper, StepButton, Typography } from '@mui/material';

import { useSelector } from 'react-redux';
import {
    selectActionStep,
} from './stepperSlice';

import { steps } from '../../../../constants/constants';


function HeaderStepper() {
    const activeStep = useSelector(selectActionStep);

    console.log(activeStep)

    // const totalSteps = () => {
    //     return steps.length;
    // };

    // const completedSteps = () => {
    //     return Object.keys(completed).length;
    // };

    // const isLastStep = () => {
    //     return activeStep === (totalSteps() - 1);
    // };

    // const allStepsCompleted = () => {
    //     return completedSteps() === totalSteps();
    // };

    // const handleNext = () => {
    //     const newActiveStep = isLastStep() && !allStepsCompleted() ? steps.findIndex((step, i) => !(i in completed)) : activeStep + 1;
    // };

    // const hanleComplete = () => {
    //     const newCompleted = completed;
    //     newCompleted[activeStep] = true;
    //     setCompleted(newCompleted);
    //     handleNext();
    // };


    return (
        <Stepper connector={null} activeStep={activeStep} sx={{ flexGrow: '1', justifyContent: 'center' }}>
            {steps.map((label, index) => {
                return (<Step key={index} >
                    <StepButton icon={<Typography variant='body2-regular'>{index + 1}.</Typography>}>
                        {label}
                    </StepButton>
                </Step>)
            })}
        </Stepper>
    );
};

export default HeaderStepper;