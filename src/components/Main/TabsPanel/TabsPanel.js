import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import { tabsPanelItems } from '../../../constants/constants'
import Board from '../../Board/Board';
import DashBoard from '../../DashBoard/DashBoard';
import Library from '../../Library/Library';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabsPanel() {

  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: 'grey.main', width: '1180px' }}>
      <Box position="static" sx={{ height: '70px', bgcolor: 'grey.main', display: 'flex'  }} elevation={0}>
      <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="standard"
          aria-label="full width tabs example"
          TabIndicatorProps={{ hidden: true }}
        >
          {tabsPanelItems.map((item, index) => (
            <Tab
              key={index}
              label={item.title}
              icon={<img src={item.icon} alt={item.title}/>}
              iconPosition='start'
              sx={{ fontFamily: 'YS Text', fontSize: '14px', lineHeight: '18px', textTransform: 'none'}}
              {...a11yProps([index])} />
          ))}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} children={<Board />} />
      <CustomTabPanel value={value} index={1} children={<DashBoard />} />
      <CustomTabPanel value={value} index={2} children={<Library />}/>
    </Box>
  );
}




  