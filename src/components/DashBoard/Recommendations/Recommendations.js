import { Typography, Card } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export default function Recommendations({ recommendations }) {
  return (
    <Card sx={{ borderRadius: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingX: '24px', paddingY: '18px' }}>
      <Box sx={{ width: '100%', display: 'flex', padding: 0 }}>
        <Typography fontSize={16} fontWeight={700} pb={'5px'}>Рекомендации</Typography>
      </Box>
        <List sx={{ width: '100%', display: 'flex', flexDirection: 'column', padding: 0 }} >
          {recommendations.map((rec, index) => (
          <ListItem key={index} sx={{ display: 'flex', paddingX: 0, paddingY: '12px', justifyContent: 'start', borderBottom: '1px solid #DDE0E4', '&:last-child': { borderBottom: 0 } }}>
            <Box width={'24px'} height={'24px'} marginRight={'12px'}>
              <img src={rec.icon} alt={rec.title} /> 
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
              <Typography fontSize={12} fontWeight={500}>{`${rec.title} - `}&nbsp;</Typography>
              <Typography fontSize={12}>{rec.text}</Typography>
            </Box>
          </ListItem>
          ))}         
        </List>
    </Card>
  );
}