import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';


export default function Result({result, text, textColor}) {

  return (
    <Card elevation={4} sx={{ borderRadius: '10px' }}>
      <Stack direction={'row'} padding={2.4} height={90}>
        <Stack>
          <Typography gutterBottom variant="h4" component="h4" fontSize={28} color={textColor}>
            {result}
          </Typography>
          <Typography variant="body2" fontSize={10} color={'#757575'} height={30}>
            {text}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
