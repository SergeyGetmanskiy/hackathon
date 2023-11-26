import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';

import arrow from './icons/arrow.svg'


export default function Target() {

  return (
    <Card elevation={4}>
      <Stack direction={'row'} padding={3} height={100}>
        <Stack>
          <Typography variant="body2" color="text.secondary" fontSize={14} fontWeight={500} >
            Не останавливайся на достигнутом, поставь новую цель!
          </Typography>
        </Stack>
        <Stack justifyContent={'flex-end'}>
          <img src={arrow} alt='prize' />
        </Stack>
      </Stack>
    </Card>
  );
}
