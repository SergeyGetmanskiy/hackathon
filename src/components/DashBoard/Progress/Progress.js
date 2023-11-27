import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Box, Stack } from '@mui/material';



export default function Progress({ title, image, slogan, sloganColor,  percentage, text }) {
  return (
    <Card sx={{ borderRadius: '12px' }}>
      <Stack paddingX={'24px'} paddingY={'14px'}>
        <Box sx={{ display: 'flex', justifyContent: 'start'  }}>
          <Typography fontWeight={700} fontSize={16}>{title}</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={image} alt='Прогресс'  />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography color={sloganColor} fontWeight={700} fontSize={14}>{slogan}</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box sx={{ maxWidth: '254px', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingY: '18px', gap: '14px' }}>
            <Typography fontWeight={500} fontSize={28}>{`${percentage}%`}</Typography>
            <Typography fontWeight={400} fontSize={12}>{text}</Typography>
          </Box>
        </Box>
      </Stack>
    </Card>
  );
}