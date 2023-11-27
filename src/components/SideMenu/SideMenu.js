import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';

import { sideMenuItems, sideMenuLogo } from '../../constants/constants';

const drawerWidth = 105;

export default function SideMenu() {
  return (
    <Box sx={{ display: 'flex'}}>
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
            <ListItem key={index} disablePadding sx={{ display: 'flex', flexDirection: 'column', height: '45px', py: 0, alignItems: 'center'  }}>
              <Box>
                <img src={item.icon} alt={item.title} />
              </Box>
              <Typography sx={item.title !== 'Навыки' ? { color: 'text.disabled' } : { color: 'white' }}
                variant={item.title !== 'Навыки' ? 'caption1-regular' : 'caption1-medium' }
              >
                {item.title}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
