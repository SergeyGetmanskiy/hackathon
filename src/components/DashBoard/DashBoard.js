import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Stack } from '@mui/material';

import Achievments from './Achievments/Achievments';
import Target from './Target/Target';
import Result from './Result/Result';
import SkillsTable from './SkillsTable/SkillsTable';
import Progress from './Progress/Progress';
import Recommendations from './Recommendations/Recommendations';

import { skillsForDashboard, progress, recommendations } from '../../constants/constants';

const { title, image, slogan, sloganColor, percentage, text  } = progress;
 
export default function DashBoard() {
  return (
    <Stack useFlexGap spacing={'20px'} direction={'row'} sx={{ backgroundColor: 'grey.main', p: '20px' }}>
      <Box width={610}>
        <Grid container columnSpacing={2} rowSpacing={2}>
          <Grid item  xs={6}>
            <Achievments />
          </Grid>
          <Grid item  xs={6}>
            <Target />
          </Grid>
          {skillsForDashboard.map((skill, index) => (
            <Grid key={index} item xs={4}>
              <Result result={skill.result} text={skill.text} textColor={skill.textColor}/>
            </Grid>
          ))}
          <Grid item>
            <SkillsTable />
          </Grid>
        </Grid>       
      </Box>
      <Box width={400} sx={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <Progress title={title} image={image} slogan={slogan} sloganColor={sloganColor} percentage={percentage} text={text} />
        <Recommendations recommendations={recommendations} />
      </Box>
    </Stack>
  )
}