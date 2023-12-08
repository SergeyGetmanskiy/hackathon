import { Button, Container, Paper, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
    nextStep,
    backStep,
} from '../Onboarding/Header/HeaderStepper/stepperSlice';

import {
    dataInitailLevelUser,
    dataGoalLevelUser,
} from '../../constants/constants';

import { addInitialLevelUser, addGoalLevelUser } from "../../utils/api";

function Level() {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const yourLevelPage = (location.pathname === '/onboarding/user-level');

    const [valueButton, setValueButton] = useState('');

    function handleValueButton(evt) {
        setValueButton(evt.target.value);
    };

    function handleSubmit(evt) {
        evt.preventDefault();
        if (yourLevelPage) {
            addInitialLevelUser({
                level: valueButton,
            });
        } else {
            addGoalLevelUser({
                level: valueButton,
            });
        };
    };

    const handleClickBackButton = () => {
        dispatch(backStep());
        navigate('/onboarding/user-skills');
    };

    const handleClickNextButton = (evt) => {
        handleSubmit(evt);
        dispatch(nextStep());
        navigate(`${yourLevelPage ? '/onboarding/user-skills' : '/onboarding/goal-skills'}`);
    };

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
            <Stack component='form' method='post' direction='column' spacing='20px' sx={{ p: '28px 0 40px 0' }}>
                {(yourLevelPage ? dataInitailLevelUser : dataGoalLevelUser).map((card, index) => {
                    return (<Paper key={index} value={card} type='button' onClick={(evt) => handleValueButton(evt)} variant='buttonSelectLevel' component='button'>{card}</Paper>)
                })}
                <Stack direction='row' spacing='20px' sx={{ justifyContent: 'center', pt: '40px', }}>
                    {yourLevelPage ? '' : <Button type='button' onClick={handleClickBackButton} variant='outlined' sx={{
                        width: '183px',
                        p: '15px 0',
                        boxSizing: 'content-box',
                        fontSize: '16px',
                        fontWeight: '500',
                        lineHeight: '20px',
                        textAlign: 'center',
                        color: '#1D6BF3',
                        borderRadius: '6px',
                        borderColor: '#1D6BF3',
                        bgcolor: '#fff',
                    }}>Назад</Button>}
                    <Button variant='contained' onClick={(evt) => handleClickNextButton(evt)} sx={{
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
            </Stack>
        </Container >
    );
};

export default Level;