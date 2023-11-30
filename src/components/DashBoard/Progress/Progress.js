import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Box, Stack } from '@mui/material';



export default function Progress({ title, image, slogan, sloganColor,  percentage, text }) {
  return (
    <Card sx={{ borderRadius: '12px' }}>
      <Stack paddingX={'24px'} paddingY={'16px'}>
        <Box sx={{ display: 'flex', justifyContent: 'start'  }}>
          <Typography variant='body1-medium'>{title}</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={image} alt='Прогресс'  />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography color={sloganColor} variant='body2-medium'>{slogan}</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingY: '18px', gap: '14px' }}>
            <Typography variant='h2-medium'>{`${percentage}%`}</Typography>
            <Typography variant='body3-regular' sx={{ width: '160px' }}>{text}</Typography>
          </Box>
        </Box>
      </Stack>
    </Card>
  );
}