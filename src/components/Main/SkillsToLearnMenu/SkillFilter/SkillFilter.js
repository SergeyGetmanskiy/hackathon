import { useState } from 'react';
import { useNavigate } from 'react-router';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import SkillCard from '../SkillCard/SkillCard'

import { skills } from '../../../../constants/constants'

const tabsPanelItems = [ 'Все', 'Мягкие', 'Жесткие' ]

function SkillsList(props) {
  return (
    <List sx={{ display: 'flex', flexDirection: 'column', gap: '20px', p: 0 }}>
      {props.cards.map((item, index) => (
        <ListItem key={index} sx={{ p: 0,  }}>
          <ListItemButton sx={{ p: 0 }} onClick={props.onClick}>
            <SkillCard title={item.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}

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

export default function SkillFilter({ onClick }) {

  const navigate = useNavigate();
  
  const softSkills = skills.filter((item) => item.isHard === false);
  const hardSkills = skills.filter((item) => item.isHard === true);
  
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(value)
  };

  const handleClick = () => {
    navigate(`/skills`);
    onClick();
  }

  return (
    <Box sx={{ width: '100%', p: 0 }}>
      <Box sx={{ }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="standard"
          aria-label="full width tabs example"
          TabIndicatorProps={{ sx: { bgcolor: 'white.main' } }}
          sx={{ '&.MuiTabs-root': { minHeight: '24px' }, mb: '18px' }}
        >
          {tabsPanelItems.map((item, index) => (
            <Tab
              key={index}
              label={item}
              iconPosition='start'
              sx={{ '&.MuiButtonBase-root.MuiTab-root': { minHeight: '24px' }, fontFamily: 'YS Text', fontSize: '14px', lineHeight: '20px', fontWeight: '500', textTransform: 'none',  minWidth: 0, py: 0, '&:first-of-type': { pl: 0 } }}
              {...a11yProps([index])} />
          ))}
        </Tabs>
      </Box>
      <CustomTabPanel sx={{ p: 0 }} value={value} index={0} children={<SkillsList cards={skills} onClick={handleClick} />} />
      <CustomTabPanel value={value} index={1} children={<SkillsList cards={softSkills} onClick={handleClick} />} />
      <CustomTabPanel value={value} index={2} children={<SkillsList cards={hardSkills} onClick={handleClick} />}/>
    </Box>
  );
}
