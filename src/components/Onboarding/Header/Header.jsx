import { AppBar, CardMedia, Container, Step, Stepper } from '@mui/material';
import logo from '../../../image/logo 5.svg';
import { useLocation, Outlet } from 'react-router-dom';

function Header() {
    const location = useLocation();
    console.log(location.pathname)
    return (
      <>
      <AppBar color='default' position='static' sx={{
            height: '60px',
            bgcolor: 'common.white',
            boxShadow: 'none',
            justifyContent: 'center',
        }}>
            <CardMedia
                component="img"
                image={logo}
                onLoad={() => console.log()}
                onError={() => console.log()}
                alt="Здесь должен быть логотип"
                sx={{
                    maxWidth: '44px',
                    ml: '40px',
                }}
            />
            <Container>
                <Stepper>
                    <Step sx={{
                        fontSize: '14px',
                        fontWeight: '400',
                        lineHeight: '20px',
                        color: '#797981',

                    }}>1. Твой уровень</Step>
                    <Step sx={{
                        fontSize: '14px',
                        fontWeight: '400',
                        lineHeight: '20px',
                        color: '#797981',

                    }}>2. Навыки которыми владеешь</Step>
                    <Step sx={{
                        fontSize: '14px',
                        fontWeight: '400',
                        lineHeight: '20px',
                        color: '#797981',

                    }}>3. К чему стремишься</Step>
                    <Step sx={{
                        fontSize: '14px',
                        fontWeight: '400',
                        lineHeight: '20px',
                        color: '#797981',

                    }}>4. Навыки на прокачку</Step>
                </Stepper>
            </Container>
        </AppBar>
        <Outlet />
      </>
        
        
    );
};

export default Header;