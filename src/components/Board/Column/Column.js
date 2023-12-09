import { Box, List, Card, Typography, CardActionArea, Button } from "@mui/material"
import ProgressBar from "../ProgressBar/ProgressBar";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import { setSkill } from "../../../features/skills/skillSlice";
import paperClip from '../../../images/Board/paperclip.svg'

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

  const handleClick = (card) => {
    dispatch(setSkill(card));
    navigate('../skill');
  }

  return (
    <>
      <Box sx={{ mb: '12px' }}>
        <Typography variant='body3-medium'>{`${columnTitle} (${cards.length})`}</Typography>
      </Box>
      <List sx={{ display: 'flex', flexDirection: 'column', gap: '20px', p: 0 }}>
        {cards.map((card, index) => (
          <Card key={card.skillId} sx={{position: 'relative' }}>
            <CardActionArea
              onClick={() => handleClick(card)}
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
