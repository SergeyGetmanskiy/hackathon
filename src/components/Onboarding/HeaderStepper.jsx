import { Step, Stepper, StepButton, Typography } from '@mui/material';




function HeaderStepper({ steps, activeStep, }) {

    return (
        <Stepper connector={null} activeStep={activeStep} sx={{ flexGrow: '1', justifyContent: 'center' }}>
            {steps.map((label, index) => {
                return (<Step key={index} >
                    <StepButton href='your-level' icon={<Typography variant='body2-regular'>{index + 1}.</Typography>}>
                        {label}
                    </StepButton>
                </Step>)
            })}
        </Stepper>
    );
};

export default HeaderStepper;