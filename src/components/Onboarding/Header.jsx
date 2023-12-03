import { AppBar, CardMedia } from '@mui/material';
import logo from '../../image/logo 5.svg';
import HeaderStepper from './HeaderStepper';
import { useLocation } from 'react-router-dom';

function Header({ steps, activeStep, completed, setActiveStep }) {
    const location = useLocation().pathname;
    
    return (
        <AppBar color='default' position='static' sx={{
            height: '60px',
            bgcolor: 'common.white',
            boxShadow: 'none',
            flexDirection: 'row',
            alignItems: 'center',
        }}>
            <CardMedia
                component="img"
                image={logo}
                onLoad={() => console.log()}
                onError={() => console.log()}
                alt="Здесь должен быть логотип"
                sx={{
                    maxWidth: '44px',
                    maxHeight: '44px',
                    ml: '40px',
                }}
            />
            {location === '/onboarding' ? '' : <HeaderStepper steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} completed={completed} />}
        </AppBar >
    );
};

export default Header;