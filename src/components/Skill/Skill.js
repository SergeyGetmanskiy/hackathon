import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Box, Button, Divider, Link, Typography, SvgIcon } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { api } from '../../utils/Api';

import { arrowBack } from '../../constants/constants';
import { logoSmall } from '../../constants/constants';
import { externalLink } from '../../constants/constants';
import { learningStatusToggled, skillClicked } from '../../features/skills/skillsSlice';

export default function Skill() {

  const navigate = useNavigate();
  const skill = useSelector(state => state.skills).find((skill) => skill.clicked)
  const dispatch = useDispatch();

  const getStatusColor = () => {
    if(skill.status === 'Базовый') {
      return 'green.light'
    } else if(skill.status === 'Средний') {
      return 'purple.light' 
    } else if(skill.status === 'Продвинутый') {
      return 'orange.light' 
    } else {
      return '#F1F6FF'
    }
  }  

  const handleChange = (e, resourceId, skillId) => {
    const isChecked = e.target.checked;
    const action = !isChecked ? 
      {
      add: [],
      rm: [resourceId],
    }
    :
      {
      add: [resourceId],
      rm: [],
    }
    api.toggleLearningStatus(action)
        .then((res) => {
          const payload = {
            resourceId,
            skillId,
           }
          dispatch(learningStatusToggled(payload))
        } )
    
        .catch((err) => {
          console.log(err);
        })
  }

  const goBack = (id) => {
    navigate(-1);
    dispatch(skillClicked(id))
  }

  if(skill) {
  return (
    <Box sx={{ m: '20px', width: '948px', height: '100vh', bgcolor: 'white.main', borderRadius: '10px' }}>
      <Box sx={{ position: 'relative', boxSizing: 'content-box', width: '490px', display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '20px', px: '36px', py: '20px' }}>
        <Button
          onClick={() => goBack(skill.skillId)}
          sx={{ display: 'flex', p: 0, justifyContent: '', width: '20px' }}>
          <img src={arrowBack} alt='Стрелка назад' />
          <Typography color={'black.black500'} variant='body3-regular' sx={{ textTransform: 'none', ml: '5px' }}>Назад</Typography>
        </Button>
        <Typography variant='subtitle1-medium'>
          {skill.title}
        </Typography>
        <Typography variant='body2-regular' paragraph sx={{ color: 'black.black500' }}>
          {skill.descriptionFull}
        </Typography>
        <Box sx={{ width: '100%', display: 'flex', flexDirection:'column', gap: '12px' }}>
          {skill.resources.map((resource, index) => (
            <FormGroup key={index} sx={{ gap: '2px' }} >
              <FormControlLabel 
                control={
                  <Checkbox
                    checked={resource.completed}
                    value={resource.completed}
                    onChange={(e) => handleChange(e, resource.id, skill.skillId)} id={resource.title}
                    checkedIcon={
                      <SvgIcon fontSize="small" >{
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="0.5" y="0.5" width="18" height="18" rx="3.5" fill="white" stroke="#1D6BF3" />
                          <path d="M8.36586 12.6027L5.26332 9.50013C5.11486 9.35172 4.91353 9.26834 4.70361 9.26834C4.49369 9.26834 4.29236 9.35172 4.1439 9.50013C3.99548 9.64859 3.91211 9.84992 3.91211 10.0598C3.91211 10.2698 3.99548 10.4711 4.1439 10.6195L7.24644 13.7221C7.39347 13.8692 7.56805 13.9859 7.76019 14.0655C7.95233 14.1451 8.15827 14.1861 8.36625 14.1861C8.57423 14.1861 8.78018 14.1451 8.97232 14.0655C9.16446 13.9859 9.33903 13.8692 9.48607 13.7221L16.8106 6.39759C16.959 6.24913 17.0424 6.04781 17.0424 5.83788C17.0424 5.62796 16.959 5.42664 16.8106 5.27818C16.6621 5.12976 16.4608 5.04639 16.2509 5.04639C16.0409 5.04639 15.8396 5.12976 15.6911 5.27818L8.36586 12.6027Z" fill="#1D6BF3" />
                        </svg>
                      }
                      </SvgIcon>
                    } 
                    icon={
                      <SvgIcon fontSize="small" viewBox="true" >{
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="18" height="18" rx="3.5" fill="white" stroke="#797981" />
                        </svg>
                      }
                      </SvgIcon>
                      }
                    />
                  } 
                label={<Typography variant='body2-regular' sx={{ textDecoration: `${ resource.completed ? 'line-through' : 'none' }` }}>{resource.title}</Typography>} />
              <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'end',  }}>
                <Typography variant='body3-regular' sx={{ color: 'black.black500', ml: '30px', textDecoration: `${ resource.completed ? 'line-through' : 'none' }` }}>
                  {`Статья на ${resource.source} — ${resource.duration} минут`}
                </Typography>
                <Link
                    href={`${resource.source}`}
                    target='_blank' 
                    sx={{ display: 'flex', alignItems: 'end' }} 
                    children={<img src={externalLink} alt='логотип' style={{ height: '12px' }} />} />
              </Box>
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
              {`Курс Яндекса по ${skill.title}`}
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
          bgcolor: `${getStatusColor()}`,
          borderRadius: '10px'
        }}>
          <Typography variant='body3-regular'>{skill.status}</Typography>
        </Box>
      </Box>
    </Box>
  );}
}

