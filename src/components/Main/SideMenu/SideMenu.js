import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { IconButton, ListItemButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import { sideMenuItems, sideMenuLogo } from '../../../constants/constants';

const drawerWidth = 105;

export default function SideMenu({ setIsOpen }) {

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setIsOpen(true);
  };

  return (
    <Box sx={{ display: 'flex', zIndex: 1301}}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: 'black.main'
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '76px' }}>
          <IconButton >
            <img src={sideMenuLogo} alt='Логотип мастерской' />
          </IconButton>
        </Box>
        <Divider variant='middle' sx={{ bgcolor: 'black.light', mb: '20px' }}/>
        <List sx={{ display: 'flex', flexDirection: 'column', gap: '36px'}}>
          {sideMenuItems.map((item, index) => (
            <ListItemButton onClick={item.title === 'Навыки' ? toggleDrawer(true) : null} key={index} sx={{ display: 'flex', flexDirection: 'column', height: '45px', py: 0, alignItems: 'center'  }}>
              <Box>
                <img src={item.icon} alt={item.title} />
              </Box>
              <Typography sx={item.title !== 'Навыки' ? { color: 'text.disabled' } : { color: 'white.main' }}
                variant={item.title !== 'Навыки' ? 'caption1-regular' : 'caption1-medium' }
              >
                {item.title}
              </Typography>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
