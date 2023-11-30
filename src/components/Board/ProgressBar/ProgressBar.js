import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function ProgressBar({ progress }) {

  let progressColor;

  if(progress >= 70) {
    progressColor = 'progressBarOrange'
  } else if(progress >= 40 && progress < 70) {
    progressColor = 'progressBarBlue'
  } else if(progress < 40) {
    progressColor = 'progressBarGrey'
  }
  
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress color={progressColor} variant="determinate" value={progress} />
    </Box>
  );
}
