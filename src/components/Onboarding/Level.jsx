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

import { getIdOfGoalLevelUser, getIdOfCurrentLevelUser } from "../../utils/onboarding";

function Level({ setCurrentSpecialization, setGoalSpecialization }) {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const yourLevelPage = (location.pathname === '/onboarding/user-level');

    const [valueButton, setValueButton] = useState('');

    const [buttonActive, setButtonActive] = useState(false);

    function handleValueButton(evt) {
        console.log(evt)
        const level = evt.target.value;
        setValueButton(level.toLowerCase().slice(0, 3));
    };

    function handleSubmit(evt) {
        evt.preventDefault();
        if (yourLevelPage) {
            getIdOfCurrentLevelUser(valueButton)
                .then((res) => {
                    setCurrentSpecialization(res.results[0]);
                })
                .catch(err => `Ошибка при выборе текущего уровня ${err}`)
        } else {
            getIdOfGoalLevelUser(valueButton)
                .then((res) => {
                    setGoalSpecialization(res.results[0]);
                })
                .catch(err => `Ошибка при выборе целевого уровеня ${err}`)
        }
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
            <Typography variant='titleOnboarding' component='h1'>{yourLevelPage ? 'Выбери свой уровень' : 'Выбери уровень до которого хочешь прокачаться'}</Typography>
            <Stack component='form' method='post' direction='column' spacing='20px' sx={{ p: '28px 0 40px 0' }}>
                {(yourLevelPage ? dataInitailLevelUser : dataGoalLevelUser).map((card, index) => {
                    return (<Paper key={index} value={card} type='button' onClick={(evt) => handleValueButton(evt)} variant='buttonSelectLevel' component='button'>{card}</Paper>)
                })}
                <Stack direction='row' spacing='20px' sx={{ justifyContent: 'center', pt: '40px', }}>
                    {yourLevelPage ? '' : <Button variant='buttonBackStep' onClick={handleClickBackButton}>Назад</Button>}
                    <Button variant='buttonNextStep' type='button' onClick={(evt) => handleClickNextButton(evt)}>Далее</Button>
                </Stack>
            </Stack>
        </Container >
    );
};

export default Level;