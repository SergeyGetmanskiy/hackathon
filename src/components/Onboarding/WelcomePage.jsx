import contestImage from '../../image/image 36.svg';
import { Box } from "@mui/system";
import { Button, CardMedia, Stack, Typography } from '@mui/material';


function WelcomePage({ location }) {

    return (
        <Stack direction='row' spacing='90px' component='main' sx={{
            p: '154px 0 0 142px',
        }}>
            <Box sx={{
                maxWidth: '488px',
            }}>
                <Typography variant='h1-medium' component='h1' sx={{
                }}>Приветствуем тебя в Карьерном Пути!</Typography>
                <Typography variant='subtitle1-medium' component='p' sx={{
                    p: '18px 0 57px 0',
                }}>
                    Застрял на одной позиции и не знаешь, как двигаться дальше? Нам знакомо, насколько важно постоянно развиваться.</Typography>
                <Typography variant='subtitle1-medium'></Typography>
                <Stack direction='row' spacing='20px'>
                    <Button variant='outlined' sx={{
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
                    }}>Не интересно</Button>
                    <Button variant='contained' href='/onboarding/your-level' sx={{
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
                    }}>Интересно</Button>
                </Stack>
            </Box>
            <CardMedia
                component="img"
                image={contestImage}
                onLoad={() => console.log()}
                onError={() => console.log()}
                alt="Здесь должна быть картинка"
                sx={{
                    width: '481px',
                    height: '289px',
                }}
            />
        </Stack>
    );
};

export default WelcomePage;