import { Box, List, Card, Typography, Button } from "@mui/material"
import ProgressBar from "../ProgressBar/ProgressBar"

export default function Column({ columnTitle, cards }) {
  return (
    <>
      <Box sx={{ mb: '12px' }}>
        <Typography variant='body3-medium'>{`${columnTitle} (${cards.length})`}</Typography>
      </Box>
      <List sx={{ display: 'flex', flexDirection: 'column', gap: '20px', p: 0 }}>
        {cards.map((card, index) => (
          <Card key={index} sx={{ display: 'flex', flexDirection: 'column', gap: '10px', p: '20px' }} >
            <Typography variant='body3-regular'>{card.title}</Typography>
            <Typography variant='body4-regular'>{card.description}</Typography>
            { card.progressBar ? <ProgressBar progress={card.progressBarValue} /> : null }
            <Button sx={{ display: 'flex',  gap: '10px', p: 0, justifyContent: 'start', color: 'black.main', textTransform: 'none' }} >
              <img src={card.attachmentIcon} alt='Скрепка' />
              <Typography variant='caption3-regular'>{card.attachmentText}</Typography>
            </Button>
          </Card>
        ))}
      </List>
    </>
  )
}
