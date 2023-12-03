
import { useLocation, useOutletContext } from 'react-router-dom';

import Header from './Header';
import Level from './Level';
import Skills from './Skills';


function LevelOrSkillsPage() {
    const [activeStep, completed, setActiveStep, setCompleted] = useOutletContext();

    const location = useLocation().pathname;

    const steps = [
        'Твой уровень',
        'Навыки которыми владеешь',
        'К чему стремишься',
        'Навыки на прокачку',
    ];

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === (totalSteps() - 1);
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    };

    const handleNext = () => {
        const newActiveStep = isLastStep() && !allStepsCompleted() ? steps.findIndex((step, i) => !(i in completed)) : activeStep + 1;
        setActiveStep(newActiveStep)
    };

    const hanleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    return (
        <>
            <Header steps={steps} activeStep={activeStep} completed={completed} setActiveStep={setActiveStep} />
            {location === '/onboarding/your-level' || location === '/onboarding/desired-level' ? <Level handleBack={handleBack} handleNext={handleNext} /> : <Skills handleBack={handleBack} handleNext={handleNext} />}


        </>
    );
};

export default LevelOrSkillsPage;