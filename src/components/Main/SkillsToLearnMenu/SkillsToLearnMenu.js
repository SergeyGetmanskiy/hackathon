import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { Typography } from '@mui/material';

import SkillCard from './SkillCard/SkillCard';

import { skills } from '../../../constants/constants'

export default function SkillsToLearnMenu({ isOpen, setIsOpen }) {

  const navigate = useNavigate();

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
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box sx={{ alignSelf: 'flex-start', ml: '14px', mb: '27px' }}>
        <Typography variant='body1-medium'>Навыки для изучения</Typography>
      </Box>
      <List sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {skills.map((item, index) => (
          <ListItem key={index} sx={{ p: 0,  }}>
            <ListItemButton sx={{ p: 0 }} onClick={() => navigate(`/skills`)}>
              <SkillCard title={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
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




