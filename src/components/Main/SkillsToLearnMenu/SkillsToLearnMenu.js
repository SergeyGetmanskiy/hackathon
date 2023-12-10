import { useEffect } from 'react';

import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Typography } from '@mui/material';

import SkillFilter from './SkillFilter/SkillFilter';

export default function SkillsToLearnMenu({ isOpen, setIsOpen }) {

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setIsOpen(open);
  };

  const list = () => (
    <Box
      id='skillsMenu'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        ml: '105px',
        px: '20px', 
        py: '50px', 
        width: '290px', 
        bgcolor: 'black.main', 
        color: 'white.main', 
        overflow: 'auto',
      }}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignSelf: 'flex-start', ml: '14px', mb: '27px', gap: '10px' }}>
        <Typography variant='body1-medium'>Навыки для изучения</Typography>
        <SkillFilter onClick={toggleDrawer(false)}  />
      </Box>      
    </Box>
  );

  useEffect(() => {
    const skillsMenu = document.getElementById("skillsMenu");
    if(skillsMenu) {
      skillsMenu.scrollTop = 0;
    }
  }, [isOpen]); 

  return (
    <div>
      <SwipeableDrawer
        anchor='left'
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        transitionDuration={400}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
}




