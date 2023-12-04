import { AppBar, CardMedia } from '@mui/material';
import { logoOnboarding } from '../../../constants/constants';
import HeaderStepper from './HeaderStepper/HeaderStepper';
import { Outlet, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation().pathname;

    return (
        <>
            <AppBar color='default' position='static' sx={{
                height: '60px',
                bgcolor: 'common.white',
                boxShadow: 'none',
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <CardMedia
                    component="img"
                    image={logoOnboarding}
                    onLoad={() => console.log()}
                    onError={() => console.log()}
                    alt="Здесь должен быть логотип"
                    sx={{
                        maxWidth: '44px',
                        maxHeight: '44px',
                        ml: '40px',
                    }}
                />
                {location === '/onboarding' || location === '/onboarding/' ? '' : <HeaderStepper />}
            </AppBar >

            <Outlet />
        </>

    );
};

export default Header;