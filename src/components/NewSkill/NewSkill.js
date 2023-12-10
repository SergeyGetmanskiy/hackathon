import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

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

  const [skillsLoaded, setSkillsLoaded] = useState(false);
  const [isSubmitBtnActive, setIsSubmitBtnActive] = useState(false);
  const [valueSelected, setValueSelected] = useState();

  const skillsForDropDown = skillsDB.map(item => { return {label: item.title, id: item.skillId, status: item.status } });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e, newValue, reason) => {
    setIsSubmitBtnActive(true);
    if(newValue) {
      setValueSelected(newValue.id);
    }
    if(reason === 'clear') {
      setIsSubmitBtnActive(false);
    }
  }

  const handleInputChange = () => {
    if(!skillsLoaded) {
      loadNewSkills();
    }
    setSkillsLoaded(true);
  }

  const handleSubmit = (e, data) => {
    const newSkill = skillsDB.find(item => item.skillId === valueSelected);
    const { skillId } = newSkill;
    api.addNewSkill(skillId, 'start')
      .then((res) => {
        console.log(res);
        dispatch(skillAdded(newSkill));
        navigate('../skills');
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const loadNewSkills = () => {             // получаем данные с сервера о всех навыках, доступных для данного пользователя,
    let page = 1;                           // после того, как пользователь начал вводить символы в поисковую строку
    let newSkills = [];
    function getPaginatedData() {
      api.getNewSkills(page)
        .then((res) => {
          console.log(res);
          if (res.next === null) {
            newSkills = newSkills.concat(convertNewSkillsData(res));
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
    getPaginatedData();
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
          renderOption={(props, option) => {
            const getStatusColor = () => {
              if(option.status === 'Базовый') {
                return 'rgba(194, 229, 206, 1)'
              } else if(option.status === 'Средний') {
                return 'rgba(204, 194, 237, 1)' 
              } else if(option.status === 'Продвинутый') {
                return 'rgba(255, 225, 189, 1)' 
              } else {
                return '#F1F6FF'
              }
            }  
            return (
              <li {...props} key={option.id} style={{ display: 'flex', justifyContent: 'space-between' }} >
                <div style={{ fontSize: '14px', lineHeight: '18px' }}>
                  {option.label}
                </div>
                <div style={{ fontSize: '10px', color: `${getStatusColor()}` }}>
                  {option.status}
                </div>
              </li>
            );
          }}
          options={skillsForDropDown}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          sx={{ width: '300px' }}
          renderInput={(params) => <TextField {...params} label="Что ты хотел бы изучить..." />}
          onInputChange={() => handleInputChange()}
          onChange={(e, newValue, reason) => handleChange(e, newValue, reason)}
          
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
                color: 'white.main',  
              },
              '&:enabled': {
                color: 'white.main',  
              },              
            }}
            disabled={isSubmitBtnActive ? false : true}
          >Добавить навык</Button>
        </Box>
      </Box>
    </Box>
  );
}
