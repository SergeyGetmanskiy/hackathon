import { Route, Routes } from 'react-router-dom';
import { Box } from "@mui/material";

import Main from './components/Main/Main';
import Header from "./components/Onboarding/Header/Header";
import WelcomePage from "./components/Onboarding/WelcomePage/WelcomePage";
import YourLevel from "./components/Onboarding/YourLevel/YourLevel";
import YourSkills from "./components/Onboarding/YourSkills/YourSkills";
import { useState } from 'react';

function App() {

  const [loggedIn, setLoggedIn] = useState(true);

  const [isOnboardingComplete, setIsOnboardingComplete] = useState(false);  

  return (
    isOnboardingComplete ?
      <Routes>
        <Route path='/' element={ <Main />}>
        </Route>
      </Routes>
      :
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='onboarding' element={<Header />}>
          <Route path='your-level' element={<YourLevel />} />
          <Route path='your-skills' element={<YourSkills setIsOnboardingComplete={setIsOnboardingComplete} />} />
        </Route>
      </Routes>
  );
}

export default App;