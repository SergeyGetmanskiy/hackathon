import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';

import logo from './icons/logo-achievments.svg'


export default function Achievments() {

  return (
    <Card elevation={4} sx={{ borderRadius: '10px' }} >
      <Stack direction={'row'} padding={2.4} height={100} >
        <Stack>
          <Typography gutterBottom variant="body1" component="div" fontSize={20} fontWeight={500} >
            Достижения
          </Typography>
          <Typography variant="body2" color="text.secondary" fontSize={11}>
            За прошлую неделю ты хорошо прокачал навыки, так держать!
          </Typography>
        </Stack>
        <img src={logo} alt='prize' />
      </Stack>
    </Card>
  );
}
