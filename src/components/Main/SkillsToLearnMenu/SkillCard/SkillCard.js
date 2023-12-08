import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';


export default function SkillCard({ title, length }) {
  return (
    <Card sx={{ width: '242px', bgcolor: 'black.black700', py: '23px', px:'21px', borderRadius: '10px',
    '&:hover': {
      bgcolor: 'black.black600',
        '& .MuiTypography-body3-regular': {
          color: 'white',     
        }   
      }
    }}>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant='body3-regular' sx={{ color: 'black.black300', }}>
          {title}
        </Typography>
        <Box sx={{ display: 'flex', width: '22px', height: '16px', borderRadius: '4px', bgcolor: 'black.black100', alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ display: 'flex' }}>
            <Typography variant='caption3-regular' padding={0}>
              {length}
            </Typography>
          </Box>
        </Box>
      </CardActions>
    </Card>
  );
}
