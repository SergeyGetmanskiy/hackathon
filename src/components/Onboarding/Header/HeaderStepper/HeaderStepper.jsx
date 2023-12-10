import { Step, Stepper, StepButton, Typography } from '@mui/material';

import { useSelector } from 'react-redux';
import {
    selectActionStep,
} from './stepperSlice';

import { steps } from '../../../../constants/constants';


function HeaderStepper() {
    const activeStep = useSelector(selectActionStep);

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