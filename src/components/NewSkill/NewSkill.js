import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box, Button, Typography, Divider } from '@mui/material';

import { skillsDB, arrowBack } from '../../constants/constants';


export default function NewSkill({skills, setSkills}) {

  const [isSubmitBtnActive, setIsSubmitBtnActive] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e, newValue) => {
    setIsSubmitBtnActive(true);
    setSkills([newValue, ...skills])
  }

  return (
    <Box sx={{ m: '20px', width: '948px', height: '100vh', bgcolor: 'white.main', borderRadius: '10px' }}>
      <Box sx={{ width: '360px', display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '20px', px: '36px', py: '20px' }}>
        <Button onClick={() => navigate(-1) } sx={{ p: 0, justifyContent: 'left' }}>
          <img src={arrowBack} alt='Стрелка назад' />
        </Button>
        <Typography variant='subtitle1-medium'>
          Новый навык
        </Typography>
        <Autocomplete
          disablePortal
          options={skillsDB}
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
            onClick={() => navigate('') }
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
