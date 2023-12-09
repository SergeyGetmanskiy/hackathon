import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import SkillCard from '../SkillCard/SkillCard';

import { setSkillsGroupName } from '../../../../features/skills/skillsGroupSlice';

const tabsPanelItems = [ 'Все', 'Мягкие', 'Жесткие' ]

function SkillsList(props) {

  const skillGroups = Object.entries(props.cards          // Создаем массив групп навыков с данными о кол-ве всех навыков в группе
    .map((card) => card.groupName)
    .reduce((acc, value) => ({
      ...acc,
      [value]: (acc[value] || 0) + 1
    }), {}));

  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(setSkillsGroupName(item[0]));
    props.onClick();
  }

  return (
    <List sx={{ display: 'flex', flexDirection: 'column', gap: '20px', p: 0 }}>
      {skillGroups.map((item, index) => (
        <ListItem key={index} sx={{ p: 0,  }}>
          <ListItemButton sx={{ p: 0 }} onClick={() => handleClick(item)}>
            <SkillCard title={item[0]} length={item[1]} />
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

  const skills = useSelector(state => state.skills);
  

  const navigate = useNavigate();
  
  const softSkills = skills.filter((item) => item.type === 'soft');
  const hardSkills = skills.filter((item) => item.type === 'hard');
  
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
