import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box, Button, Typography, Divider } from '@mui/material';

import { skillsDB, arrowBack } from '../../constants/constants';

import { skillAdded } from '../../features/skills/skillsSlice';

export default function NewSkill() {

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
