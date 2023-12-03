import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import WelcomePage from "./WelcomePage";
import { useState } from "react";



function Onboarding() {

    const location = useLocation().pathname;


    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});

    return (
        <>
            {location === '/onboarding' ? <><Header />
                <WelcomePage /></> : <Outlet context={[activeStep, completed, setActiveStep, setCompleted]}activeStep={activeStep} completed={completed} setActiveStep={setActiveStep} setCompleted={setCompleted} />}
        </>
    );
};

export default Onboarding;

