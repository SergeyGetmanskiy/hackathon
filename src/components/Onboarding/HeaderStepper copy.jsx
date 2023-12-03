import { Step, Stepper, StepButton, Typography } from '@mui/material';




function HeaderStepper({ steps, activeStep, setActiveStep, completed }) {

    const handleStep = (step) => {
        setActiveStep(step);
    };

    return (
        <Stepper nonLinear={true} connector={null} activeStep={activeStep} sx={{ flexGrow: '1', justifyContent: 'center' }}>
            <Step>
                <StepButton>
                    
                </StepButton>
            </Step>
            {steps.map((label, index) => {
                return (<Step key={index} completed={completed[index]}>
                    <StepButton href='your-level' icon={<Typography variant='body2-regular'>{index + 1}.</Typography>}>
                        {label}
                    </StepButton>
                </Step>)
            })}
        </Stepper>
    );
};

export default HeaderStepper;