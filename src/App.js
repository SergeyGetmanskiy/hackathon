import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Box } from "@mui/material";

import { DashBoard } from "./components/DashBoard/DashBoard";
import SideMenu from "./components/SideMenu/SideMenu";

import Onboarding from './components/Onboarding/Onboarding';
import LevelOrSkillsPage from './components/Onboarding/LevelOrSkillsPage';
import Stepper from './components/Stepper/Stepper';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='onboarding' element={<Onboarding />}>
          <Route path='your-level' element={<LevelOrSkillsPage />} />
          <Route path='your-skills' element={<LevelOrSkillsPage />} />
          <Route path='desired-level' element={<LevelOrSkillsPage />} />
          <Route path='desired-skills' element={<LevelOrSkillsPage />} />
        </Route>
        <Route path='/dashboard' element={
          <Box sx={{ display: 'flex' }}>
            <SideMenu />
            <DashBoard />
          </Box>} />
          <Route path='www' element={<Stepper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;