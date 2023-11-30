import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Card, Typography } from '@mui/material';
import { Button } from '@mui/material';

import Column from './Column/Column';

import { skillsToLearn, skillsInProgress, skillsFinished } from '../../constants/constants'

const skillCategory = 'Компоненты в Figma'

export default function Board() {
  return (
    <Box sx={{ flexGrow: 1, p: '20px', width: '870px' }}>
      <Grid container spacing={2} bgcolor={'grey.main'}>
        <Grid item xs={12}>
          <Card sx={{ display: 'flex', flexDirection: 'column', bgcolor: 'grey.main' }} elevation={0}>
            <Box sx={{ alignSelf: 'end' }}>
              <Button variant="contained" size='large'>
                <Typography variant='body2-medium' sx={{ textTransform: 'none', color: 'white' }}>+ &nbsp;&nbsp; Добавить навык</Typography>
              </Button>
            </Box>
            <Typography variant='body2-medium'>{skillCategory}</Typography>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Column columnTitle={'Изучить'} cards={skillsToLearn}/>
        </Grid>
        <Grid item xs={4}>
          <Column columnTitle={'В процессе'} cards={skillsInProgress}/>
        </Grid>
        <Grid item xs={4}>
          <Column columnTitle={'Пройденные'} cards={skillsFinished}/>
        </Grid>
      </Grid>
    </Box>
  );
}
