import { Button, Checkbox, Container, Grid, Paper, Stack, SvgIcon, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
    nextStep,
    backStep,
} from '../Onboarding/Header/HeaderStepper/stepperSlice';

import {
    getGoalSkillsUser,
    getInitialSkillsUser,
    createNewUser,
} from '../../utils/onboarding';

import { toggle } from '../../features/onboarding/onboardingSlice';

function Skills({ currentSpecialization, goalSpecialization, setCheckedCurrentSkills, setCheckedGoalSkills, checkedCurrentSkills, checkedGoalSkills, loadUserSkills }) {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const yourSkillsPage = (location.pathname === '/onboarding/user-skills');

    const [skills, setSkills] = useState([]);

    useEffect(() => {
        if (yourSkillsPage && currentSpecialization) {
            getInitialSkillsUser(currentSpecialization)
                .then(res => {
                    setSkills(res.results)
                })
                .catch((err) => `Ошибка при отрисовке навыков ${err}`)
        } else if (goalSpecialization) {
            getGoalSkillsUser(goalSpecialization)
                .then(res => {
                    setSkills(res.results)
                })
                .catch((err) => `Ошибка при отрисовке навыков ${err}`)
        }
    }, [currentSpecialization, goalSpecialization])

    const handleClickBackButton = () => {
        dispatch(backStep());
        navigate(`${yourSkillsPage ? '/onboarding/user-level' : '/onboarding/goal-level'}`);
    };

    const handleClickNextButton = (evt) => {
        if (yourSkillsPage) {
            dispatch(nextStep());
            navigate('/onboarding/goal-level');
        } else {
        //  handleSubmit(evt);
            dispatch(toggle(true));
            loadUserSkills();
            navigate('/');
        };
    };

    function handleSelectedSkills(evt, skill) {
        if (evt.target.checked && yourSkillsPage) {
            setCheckedCurrentSkills([skill.id, ...checkedCurrentSkills])
        } else if (evt.target.checked) {
            setCheckedGoalSkills([skill.id, ...checkedGoalSkills])
        };
    };

    function handleSubmit(evt) {
        evt.preventDefault();
        createNewUser({
            currentSpecialization: currentSpecialization,
            done: checkedCurrentSkills,
            start: checkedGoalSkills,
            goalSpecialization: goalSpecialization,
        })
            .then((res) => {
                console.log(res)
            })
            .catch(err => `Ошибка при создании нового пользователя ${err}`)
    };

    return (
        <Container component='main' sx={{
            display: 'flex',
            p: '12px 243px 0',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <Typography variant='titleOnboarding' component='h1'>{yourSkillsPage ? 'Давай определим то, что ты уже знаешь.' : 'Выбери навыки которых тебе не хватает и ты хотел бы их прокачать'}</Typography>
            <Grid container rowGap='20px' columnGap='20px' id="formSkills" component='form' sx={{ width: '796px', p: '52px 0 0 0' }}>
                {skills.map((skill, index) => {
                    return <Paper key={index} value={skill} type='button' variant='buttonSelectSkill' component='button'>{skill.name}<Checkbox onClick={(evt) => { handleSelectedSkills(evt, skill) }} checkedIcon={<SvgIcon fontSize="small" >{
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="18" height="18" rx="3.5" fill="white" stroke="#1D6BF3" />
                            <path d="M8.36586 12.6027L5.26332 9.50013C5.11486 9.35172 4.91353 9.26834 4.70361 9.26834C4.49369 9.26834 4.29236 9.35172 4.1439 9.50013C3.99548 9.64859 3.91211 9.84992 3.91211 10.0598C3.91211 10.2698 3.99548 10.4711 4.1439 10.6195L7.24644 13.7221C7.39347 13.8692 7.56805 13.9859 7.76019 14.0655C7.95233 14.1451 8.15827 14.1861 8.36625 14.1861C8.57423 14.1861 8.78018 14.1451 8.97232 14.0655C9.16446 13.9859 9.33903 13.8692 9.48607 13.7221L16.8106 6.39759C16.959 6.24913 17.0424 6.04781 17.0424 5.83788C17.0424 5.62796 16.959 5.42664 16.8106 5.27818C16.6621 5.12976 16.4608 5.04639 16.2509 5.04639C16.0409 5.04639 15.8396 5.12976 15.6911 5.27818L8.36586 12.6027Z" fill="#1D6BF3" />
                        </svg>
                    }</SvgIcon>} icon={<SvgIcon fontSize="small" viewBox="true" >{
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="18" height="18" rx="3.5" fill="white" stroke="#797981" />
                        </svg>
                    }</SvgIcon>} sx={{ width: '19px', height: '19px' }} /></Paper>
                })}
            </Grid>

            <Stack direction='row' spacing='20px' sx={{ p: '132px 0 0 0', m: '0 auto' }}>
                <Button variant='buttonBackStep' onClick={handleClickBackButton}>Назад</Button>
                <Button variant='buttonNextStep' from='formSkills'  onClick={(evt) => handleClickNextButton(evt)}>Далее</Button>
            </Stack>
        </Container>
    );
};

export default Skills;