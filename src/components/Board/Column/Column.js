import { Box, List, Card, Typography, CardActionArea, Button } from "@mui/material"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ProgressBar from "../ProgressBar/ProgressBar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { api } from "../../../utils/Api";

import { skillClicked } from "../../../features/skills/skillsSlice";
import { skillDeleted } from "../../../features/skills/skillsSlice";

import paperClip from '../../../images/Board/paperclip.svg'
import threeDots from '../../../images/Board/Action.svg'

export default function Column({ columnTitle, cards }) {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const hasProgressBar = (card) => {
    return ((card.resources.some((resource) => resource.completed)) && 
      (card.resources.some((resource) => !resource.completed)))  
  }

  const calculateProgress = (card) => {
    const completedResources = card.resources.filter((resource) => resource.completed).length;
    const totalResources = card.resources.length;
    return (Math.round((completedResources / totalResources) * 100))
  }

  const handleClick = (id) => {
    dispatch(skillClicked(id));
    navigate('../skill');
  }

  const handleDelete = (e, id) => {
    console.log(id);
    api.deleteUserSkill(id)
        .then((res) => {
          console.log(res);
        } )
    
        .catch((err) => {
          console.log(err);
        })
  /*  navigate(-1);
    dispatch(skillDeleted(skill.skillId)); */
  }

  return (
    <>
      <Box sx={{ mb: '12px' }}>
        <Typography variant='body3-medium'>{`${columnTitle} (${cards.length})`}</Typography>
      </Box>
      <List sx={{ display: 'flex', flexDirection: 'column', gap: '20px', p: 0 }}>
        {cards.map((card, index) => (
          <Card key={card.skillId} sx={{position: 'relative' }}>
            <Button onClick={(e) => handleDelete(e, card.userSkillId)} sx={{ position: 'absolute', minWidth: '20px', bottom: '-100px', left: '20px' }}>
              <MoreHorizIcon color="black.main" sx={{ color: 'black.main' }}/>
            </Button>
            <CardActionArea
              onClick={() => handleClick(card.skillId)}
              sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '10px', p: '20px' }}>
              <Typography variant='body3-regular'>{card.title}</Typography>
              <Typography variant='body4-regular'>{card.descriptionShort}</Typography>
              { hasProgressBar(card) ? <ProgressBar progress={calculateProgress(card)} /> : null }
              <Box sx={{ display: 'flex',  gap: '10px', p: 0, justifyContent: 'start', color: 'black.main', textTransform: 'none' }} >
                <img src={paperClip} alt='Скрепка' />
                <Typography variant='caption3-regular'>{`Подборка актуальных материалов по теме`}</Typography>
              </Box>
            </CardActionArea>
          </Card>
        ))}
      </List>
    </>
  )
}
