import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Stack, IconButton } from '@mui/material';

import arrow from '../../../images/Dashboard/Target/arrow.svg'



export default function Target() {

  return (
    <Card elevation={4} sx={{ borderRadius: '10px' }}>
      <Stack direction={'row'} padding={3} height={100}>
        <Stack>
          <Typography variant="body2-medium">
            Не останавливайся на достигнутом, поставь новую цель!
          </Typography>
        </Stack>
        <Stack justifyContent={'flex-end'} marginLeft={'50px'}>
          <IconButton sx={{ p: 0 }}>
            <img src={arrow} alt='prize' />
          </IconButton>
        </Stack>
      </Stack>
    </Card>
  );
}
