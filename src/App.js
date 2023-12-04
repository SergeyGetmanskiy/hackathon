import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';


import Main from './components/Main/Main';
import TabsPanel from './components/Main/TabsPanel/TabsPanel';
import NewSkill from './components/NewSkill/NewSkill';
import Skill from './components/Skill/Skill';

import { skillsToLearn } from './constants/constants';

import Header from './components/Onboarding/Header/Header';
import WelcomePage from './components/Onboarding/WelcomePage';
import Level from './components/Onboarding/Level';
import Skills from './components/Onboarding/Skills';

function App() {

  const [loggedIn, setLoggedIn] = useState(true);

  const [isOnboardingComplete, setIsOnboardingComplete] = useState(false);

  const [skills, setSkills] = useState(skillsToLearn);

  return (
    isOnboardingComplete ?
      <Routes>
        <Route path='/' element={<Main />}>
          <Route path='skills' element={<TabsPanel skills={skills} setSkills={setSkills} />} />
          <Route path='add-skill' element={<NewSkill skills={skills} setSkills={setSkills} />} />
          <Route path='skill' element={<Skill />} />
        </Route>
      </Routes>
      :
        <Routes>
          <Route path='onboarding' element={<Header />}>
            <Route index element={<WelcomePage />} />
            <Route path='your-level' element={<Level />} />
            <Route path='your-skills' element={<Skills />} />
            <Route path='desired-level' element={<Level />} />
            <Route path='desired-skills' element={<Skills />} />
          </Route>
        </Routes >
  );
}

export default App;