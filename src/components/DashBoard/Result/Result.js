import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';


export default function Result({result, text, textColor}) {

  return (
    <Card elevation={4} sx={{ borderRadius: '10px' }}>
      <Stack direction={'row'} padding={2.4} sx={{ display: 'flex'}}>
        <Stack>
          <Typography gutterBottom variant="h2-medium" color={textColor}>
            {result}
          </Typography>
          <Typography variant="caption2-regular" color={'black.black500'}>
            {text}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
