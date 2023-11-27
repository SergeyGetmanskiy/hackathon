import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';

import logo from './icons/logo-achievments.svg'


export default function Achievments() {

  return (
    <Card elevation={4} sx={{ borderRadius: '10px' }} >
      <Stack direction={'row'} padding={2.4} height={100} >
        <Stack>
          <Typography gutterBottom variant="h3-medium" component="div">
            Достижения
          </Typography>
          <Typography variant="caption2-regular" color="text.secondary">
            За прошлую неделю ты хорошо прокачал навыки, так держать!
          </Typography>
        </Stack>
        <Stack>
          <img src={logo} alt='prize' />
        </Stack>
      </Stack>
    </Card>
  );
}
