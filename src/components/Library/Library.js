import Box from '@mui/material/Box';
import { Typography, Accordion, AccordionSummary, AccordionDetails, Link } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

import { libraryDB } from '../../constants/constants';

export default function Library({}) {

  return (
    <Box sx={{ flexGrow: 1, p: '20px', width: '870px', height: '100vh' }}>
      {
        libraryDB.map((item, index) => (
          <Accordion key={index} sx={{ width: '560px' }}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ bgcolor: `${index % 2 === 0 ? '#F1F6FF' : 'white.main'}` }}
            >
              <Typography variant='body2-medium' color={'black.black900'}>{`${item.groupTitle} (${item.titles.length})`}</Typography>
            </AccordionSummary>
            {
              item.titles.map((item, index) => (
                <AccordionDetails key={index}>
                  <Link variant='body3-regular' underline='none' color={'black.black900'} component={'button'}>{item}</Link>
                </AccordionDetails>
              ))
            }
            
          </Accordion>
        ))
      }
       
    </Box>
  );
}
