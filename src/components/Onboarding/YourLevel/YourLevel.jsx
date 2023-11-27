import { Button, Container, Paper, Stack, Typography } from "@mui/material";

function YourLevel() {
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
            }}>Выбери свой уровень</Typography>
            <Stack direction='column' spacing='20px' sx={{
                p: '28px 0 40px 0',
            }}>
                <Paper component='p' sx={{
                    p: '40px 0',
                    width: '386px',
                    textAlign: 'center',
                    fontSize: '16px',
                    fontWeight: '500',
                    lineHeight: '20px',
                }}>Не знаю свой уровень</Paper>
                <Paper component='p' sx={{
                    p: '40px 0',
                    width: '386px',
                    textAlign: 'center',
                    fontSize: '16px',
                    fontWeight: '500',
                    lineHeight: '20px',
                }}>Junior</Paper>
                <Paper component='p' sx={{
                    p: '40px 0',
                    width: '386px',
                    textAlign: 'center',
                    fontSize: '16px',
                    fontWeight: '500',
                    lineHeight: '20px',
                }}>Middle</Paper>
                <Paper component='p' sx={{
                    p: '40px 0',
                    width: '386px',
                    textAlign: 'center',
                    fontSize: '16px',
                    fontWeight: '500',
                    lineHeight: '20px',
                }}>Middle +</Paper>
            </Stack>
            <Button variant='contained' href='/onboarding/your-skills' sx={{
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
        </Container >
    );
};

export default YourLevel;