import {useState} from 'react';
import { Box, Button, Divider, Link, Typography } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { arrowBack } from '../../constants/constants';
import { logoSmall } from '../../constants/constants';
import { externalLink } from '../../constants/constants';

import { skill } from '../../constants/constants';
import { useNavigate } from 'react-router-dom';

export default function Skill() {

  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  }

  return (
    <Box sx={{ m: '20px', width: '948px', height: '100vh', bgcolor: 'white.main', borderRadius: '10px' }}>
      <Box sx={{ position: 'relative', boxSizing: 'content-box', width: '490px', display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '20px', px: '36px', py: '20px' }}>
        <Button
          onClick={() => navigate(-1)}
          sx={{ p: 0, justifyContent: 'left' }}>
          <img src={arrowBack} alt='Стрелка назад' />
        </Button>
        <Typography variant='subtitle1-medium'>
          {skill.title}
        </Typography>
        <Typography variant='body2-regular' paragraph sx={{ color: 'black.black500' }}>
          {skill.description}
        </Typography>
        <Box sx={{ width: '100%', display: 'flex', flexDirection:'column', gap: '12px' }}>
          {skill.articles.map((article, index) => (
            <FormGroup key={index} sx={{ gap: '2px' }} >
              <FormControlLabel 
                control={<Checkbox value={checked} onChange={handleChange} id={article.title}/>} 
                label={<Typography variant='body2-regular'>{article.title}</Typography>} />
              <Typography variant='body3-regular' sx={{ color: 'black.black500', ml: '30px' }}>
                {`Статья на ${article.source} — ${article.duration} минут`}
              </Typography>
            </FormGroup>
          ))}
        </Box>
        <Divider/>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Typography variant='body2-medium'>
            {`У Яндекса есть курс про ${skill.shortTitle}. Может это то, что ты ищешь?`}
          </Typography>
          <Box sx={{ display: 'flex', mr: '4px', alignItems: 'end' }}>
            <img src={logoSmall} alt='логотип'/>
            <Typography variant='body2-regular'>
              {`Курс Яндекса по ${skill.yandexCourseTitle}`}
            </Typography>
            <Link
              href="https://practicum.yandex.ru/"
              target='_blank' 
              sx={{ display: 'flex', justifyContent: 'end', ml: '6px'}} 
              children={<img src={externalLink} alt='логотип' />} />
          </Box>
        </Box>
        <Box sx={{
          position: 'absolute', 
          right: '-140px', 
          top: '56px', 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '122px',
          height: '26px',
          bgcolor: '#F1F6FF',
          borderRadius: '10px'
        }}>
          <Typography variant='body3-regular'>{skill.status}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

