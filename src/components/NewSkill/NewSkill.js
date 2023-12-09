import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box, Button, Typography, Divider } from '@mui/material';

import { convertNewSkillsData } from '../../utils/HandleServerData';
import { initialNewSkillsAdded } from '../../features/skills/newSkillsSlice';
import { api } from '../../utils/Api';
import { arrowBack } from '../../constants/constants';
import { skillAdded } from '../../features/skills/skillsSlice';

export default function NewSkill() {

  const skillsDB = useSelector(state => state.newSkills);
  console.log(skillsDB);

  const [loading, setLoading] = useState(false);
  const [isSubmitBtnActive, setIsSubmitBtnActive] = useState(false);
  const [valueSelected, setValueSelected] = useState();

  const skillsForDropDown = skillsDB.map(item => { return {label: item.title, id: item.skillId } });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e, newValue) => {
    setIsSubmitBtnActive(true);
    if(newValue) {
      setValueSelected(newValue.id);
    }
  }

  const handleSubmit = (e) => {
    dispatch(skillAdded(skillsDB.find(item => item.skillId === valueSelected)))
    navigate('../skills')
  }

  const loadNewSkills = () => {
    let page = 1;
    let newSkills = [];
    function getPaginatedData() {
      api.getNewSkills(page)
        .then((res) => {
          console.log(res);
          if (res.next === null) {
            newSkills = newSkills.concat(convertNewSkillsData(res));
            console.log(newSkills)
            return dispatch(initialNewSkillsAdded(newSkills));
          } else {
            newSkills = newSkills.concat(convertNewSkillsData(res));
            page++;
            getPaginatedData();
          }
        })
        .catch((err) => {
          console.log(err);
        })
    }
    getPaginatedData()
  }

/*
  useEffect(() => {                             // получаем данные с сервера о всех навыках, доступных для данного пользователя
    let page = 1;
    let newSkills = [];
    function getPaginatedData() {
      api.getNewSkills(page)
        .then((res) => {
          console.log(res);
          if (res.next === null) {
            newSkills = newSkills.concat(convertNewSkillsData(res));
            console.log(newSkills)
            return dispatch(initialNewSkillsAdded(newSkills));
          } else {
            newSkills = newSkills.concat(convertNewSkillsData(res));
            page++;
            getPaginatedData();
          }
        })
        .catch((err) => {
          console.log(err);
        })
    }
    getPaginatedData()
  }, [loading]) */


  return (
    <Box sx={{ m: '20px', width: '948px', height: '100vh', bgcolor: 'white.main', borderRadius: '10px' }}>
      <Box sx={{ width: '360px', display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '20px', px: '36px', py: '20px' }}>
        <Button
          onClick={() => navigate(-1)}
          sx={{ display: 'flex', p: 0, justifyContent: '', width: '20px' }}>
          <img src={arrowBack} alt='Стрелка назад' />
          <Typography color={'black.black500'} variant='body3-regular' sx={{ textTransform: 'none', ml: '5px' }}>Назад</Typography>
        </Button>
        <Typography variant='subtitle1-medium'>
          Новый навык
        </Typography>
        <Autocomplete
          disablePortal
          options={skillsForDropDown}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          sx={{ width: '300px' }}
          renderInput={(params) => <TextField {...params} label="Что ты хотел бы изучить..." />}
          onInputChange={() => setLoading(true)}
          onChange={(e, newValue) => handleChange(e, newValue)}
          
        />
        <Divider />
        <Box sx={{ display: 'flex', gap: '24px' }}>
          <Button
            onClick={() => navigate(-1) } 
            variant='outlined' sx={{
              textTransform: 'none', 
              width: '107px', 
              height: '40px', 
              py: '10px', 
              px: '20px' 
            }}
          >Отменить</Button>
          <Button
            onClick={ handleSubmit }
            variant='contained' sx={{ 
              textTransform: 'none', 
              width: '149px', 
              height: '40px', 
              py: '10px', 
              px: '20px',
              '&:disabled': {
                bgcolor: `${isSubmitBtnActive ? 'blue' : 'black.black300'}`,
                color: 'white',  
              },
              '&:enabled': {
                color: 'white',  
              },              
            }}
            disabled={isSubmitBtnActive ? false : true}
          >Добавить навык</Button>
        </Box>
      </Box>
    </Box>
  );
}
