import { Typography, Card } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export default function Recommendations({ recommendations }) {
  return (
    <Card sx={{ borderRadius: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '24px' }}>
      <Box sx={{ width: '100%', display: 'flex', padding: 0 }}>
        <Typography variant='body1-medium' pb={'5px'}>Рекомендации</Typography>
      </Box>
        <List sx={{ width: '100%', display: 'flex', flexDirection: 'column', padding: 0 }} >
          {recommendations.map((rec, index) => (
          <ListItem key={index} sx={{ display: 'flex', paddingX: 0, paddingY: '12px', justifyContent: 'start', borderBottom: '1px solid #DDE0E4', '&:last-child': { borderBottom: 0 } }}>
            <Box width={'24px'} height={'24px'} sx={{ mr: '12px' }} >
              <img src={rec.icon} alt={rec.title} /> 
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
              <Typography variant='body3-regular'>{`${rec.title} - `}&nbsp;</Typography>
              <Typography variant='body3-regular'>{rec.text}</Typography>
            </Box>
          </ListItem>
          ))}         
        </List>
    </Card>
  );
}