import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Onboarding from './components/Onboarding/Onboarding';
import LevelOrSkillsPage from './components/Onboarding/LevelOrSkillsPage';
import Main from './components/Main/Main';
import TabsPanel from './components/Main/TabsPanel/TabsPanel';
import NewSkill from './components/NewSkill/NewSkill';
import Skill from './components/Skill/Skill';

import { skillsToLearn } from './constants/constants';

function App() {

  const [loggedIn, setLoggedIn] = useState(true);

  const [isOnboardingComplete, setIsOnboardingComplete] = useState(true); 
  
  const [skills, setSkills ] = useState(skillsToLearn);

  return (
    isOnboardingComplete ?
    <Routes>
      <Route path='/' element={ <Main />}>
        <Route path='skills' element={<TabsPanel skills={skills} setSkills={setSkills} />} />
        <Route path='add-skill' element={<NewSkill skills={skills} setSkills={setSkills} />} />
        <Route path='skill' element={<Skill />} />
      </Route>
    </Routes>
    :
    <Routes>
      <Route path='onboarding' element={<Onboarding />}>
        <Route path='your-level' element={<LevelOrSkillsPage />} />
        <Route path='your-skills' element={<LevelOrSkillsPage />} />
        <Route path='desired-level' element={<LevelOrSkillsPage />} />
        <Route path='desired-skills' element={<LevelOrSkillsPage />} />
      </Route>
    </Routes>
  );
}

export default App;