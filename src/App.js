import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { api } from './utils/Api';

import Onboarding from './components/Onboarding/Onboarding';
import LevelOrSkillsPage from './components/Onboarding/LevelOrSkillsPage';
import Main from './components/Main/Main';
import TabsPanel from './components/Main/TabsPanel/TabsPanel';
import NewSkill from './components/NewSkill/NewSkill';
import Skill from './components/Skill/Skill';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  const isOnboardingComplete = useSelector(state => state.onboarding)
  
  const navigate = useNavigate();

  useEffect(() => {     
    const jwt = localStorage.getItem('jwt');
    if(!jwt) {
      return
    } else {
      api.login('admin', 'adminpassword')
      .then((res) => {
        setLoggedIn(true);
        localStorage.setItem('jwt', res.access);
        if(!isOnboardingComplete) {
          navigate('/onboarding', { replace: true })
        } 
        })
      .catch((err) => {
        console.log(err);
      })
    }  
  }, []) 

  if(loggedIn) {
    return (
      isOnboardingComplete ?
      <Routes>
        <Route path='/' element={ <Main />}>
          <Route path='skills' element={<TabsPanel />} />
          <Route path='add-skill' element={<NewSkill />} />
          <Route path='skill' element={<Skill />} />
        </Route>
      </Routes>
      :
      <Routes>
        <Route path='/onboarding' element={<Onboarding />}>
          <Route path='your-level' element={<LevelOrSkillsPage />} />
          <Route path='your-skills' element={<LevelOrSkillsPage />} />
          <Route path='desired-level' element={<LevelOrSkillsPage />} />
          <Route path='desired-skills' element={<LevelOrSkillsPage />} />
        </Route>
      </Routes>
    );
  }
}

export default App;