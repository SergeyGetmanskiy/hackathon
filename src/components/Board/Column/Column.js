import { Box, List, Card, Typography, Button, CardActionArea } from "@mui/material"
import ProgressBar from "../ProgressBar/ProgressBar"
import { useNavigate } from "react-router-dom"

export default function Column({ columnTitle, cards }) {

  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ mb: '12px' }}>
        <Typography variant='body3-medium'>{`${columnTitle} (${cards.length})`}</Typography>
      </Box>
      <List sx={{ display: 'flex', flexDirection: 'column', gap: '20px', p: 0 }}>
        {cards.map((card, index) => (
          <Card key={index}>
            <CardActionArea
              onClick={() => navigate('../skill')}
              sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '10px', p: '20px' }}>
              <Typography variant='body3-regular'>{card.title}</Typography>
              <Typography variant='body4-regular'>{card.description}</Typography>
              { card.progressBar ? <ProgressBar progress={card.progressBarValue} /> : null }
              <Box sx={{ display: 'flex',  gap: '10px', p: 0, justifyContent: 'start', color: 'black.main', textTransform: 'none' }} >
                <img src={card.attachmentIcon} alt='Скрепка' />
                <Typography variant='caption3-regular'>{card.attachmentText}</Typography>
              </Box>
            </CardActionArea>
          </Card>
        ))}
      </List>
    </>
  )
}
