import { Button, Container, Paper, Stack, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

function Level({ handleBack, handleNext }) {
    const location = useLocation();
    const yourLevelPage = (location.pathname === '/onboarding/your-level');

    const yourLevelDataCard = [
        'Не знаю свой уровень',
        'Junior',
        'Middle',
        'Middle +',
    ];

    const desireLevelDataCard = [
        'Junior',
        'Middle',
        'Middle +',
        'Senior',
    ];


    return (
        <Container component='main' sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <Typography variant='h1' component='h1' sx={{
                pt: '12px',
                fontSize: '18px',
                fontWeight: '500',
                lineHeight: '24px',
                textAlign: 'center',
                color: '#1A1B22',
            }}>{yourLevelPage ? 'Выбери свой уровень' : 'Выбери уровень до которого хочешь прокачаться'}</Typography>
            <Stack direction='column' spacing='20px' sx={{
                p: '28px 0 40px 0',
            }}>
                {(yourLevelPage ? yourLevelDataCard : desireLevelDataCard).map((card, index) => {
                    return (<Paper key={index} component='p' sx={{
                        p: '40px 0',
                        width: '386px',
                        textAlign: 'center',
                        fontSize: '16px',
                        fontWeight: '500',
                        lineHeight: '20px',
                    }}>{card}</Paper>)
                })}
            </Stack>
            <Stack direction='row' spacing='20px'>
                {yourLevelPage ? '' : <Button onClick={handleBack} variant='outlined' href='/onboarding/your-level' sx={{
                    width: '183px',
                    p: '15px 0',
                    fontSize: '16px',
                    fontWeight: '500',
                    lineHeight: '20px',
                    textAlign: 'center',
                    color: '#1D6BF3',
                    borderRadius: '6px',
                    borderColor: '#1D6BF3',
                    bgcolor: '#fff',
                }}>Назад</Button>}
                <Button variant='contained' onClick={handleNext} href="" sx={{
                width: '183px',
                p: '15px 0',
                fontSize: '16px',
                fontWeight: '500',
                lineHeight: '20px',
                textAlign: 'center',
                color: '#fff',
                borderRadius: '6px',
                borderColor: '#5A9BFF',
                bgcolor: '#5A9BFF',
            }}>Далее</Button>
            </Stack>
            
            
        </Container >
    );
};

export default Level;