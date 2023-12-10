import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { api } from './utils/Api';
import { convertUserSkillsData } from './utils/HandleServerData';
import { initialSkillsAdded } from './features/skills/skillsSlice';

import Main from './components/Main/Main';
import TabsPanel from './components/Main/TabsPanel/TabsPanel';
import NewSkill from './components/NewSkill/NewSkill';
import Skill from './components/Skill/Skill';

import Header from './components/Onboarding/Header/Header';
import WelcomePage from './components/Onboarding/WelcomePage';
import Level from './components/Onboarding/Level';
import Skills from './components/Onboarding/Skills';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  const isOnboardingComplete = useSelector(state => state.onboarding)

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      setLoggedIn(true);
      if (!isOnboardingComplete) {
        navigate('/onboarding', { replace: true })
      }
    } else {
      api.login('admin', 'adminpassword')
        .then((res) => {
          setLoggedIn(true);
          localStorage.setItem('jwt', res.access);
          if (!isOnboardingComplete) {
            navigate('/onboarding', { replace: true })
          }
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [])

  useEffect(() => {                             // получаем данные о навыках пользователя с сервера после прохождения Онбординга
    let page = 1;
    let userSkills = [];
    function getPaginatedData() {
      api.getUserSkills(page)
        .then((res) => {
          console.log(res);
          if (res.next === null) {
            userSkills = userSkills.concat(convertUserSkillsData(res));
            return dispatch(initialSkillsAdded(userSkills));
          } else {
            userSkills = userSkills.concat(convertUserSkillsData(res));
            page++;
            getPaginatedData();
          }
        })
        .catch((err) => {
          console.log(err);
        })
    }
    getPaginatedData()
  }, [])

  if (loggedIn) {
    return (
      isOnboardingComplete ?
        <Routes>
          <Route path='/' element={<Main />}>
            <Route path='skills' element={<TabsPanel />} />
            <Route path='add-skill' element={<NewSkill />} />
            <Route path='skill' element={<Skill />} />
          </Route>
        </Routes>
        :
        <Routes>
          <Route path='onboarding' element={<Header />}>
            <Route index element={<WelcomePage />} />
            <Route path='user-level' element={<Level />} />
            <Route path='user-skills' element={<Skills />} />
            <Route path='goal-level' element={<Level />} />
            <Route path='goal-skills' element={<Skills setIsOnboardingComplete={isOnboardingComplete} />} />
          </Route>
        </Routes>
    );
  };
};

export default App;