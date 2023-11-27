import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Box } from "@mui/material";

import { Counter } from "./components/Counter/Counter";
import { DashBoard } from "./components/DashBoard/DashBoard";
import SideMenu from "./components/SideMenu/SideMenu";
import Header from "./components/Onboarding/Header/Header";
import WelcomePage from "./components/Onboarding/WelcomePage/WelcomePage";
import YourLevel from "./components/Onboarding/YourLevel/YourLevel";
import YourSkills from "./components/Onboarding/YourSkills/YourSkills";

function App() {
  return (
        <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/onboarding/welcome-page' element={<WelcomePage />} />
        <Route path='/onboarding/your-level' element={<YourLevel />} />
        <Route path='/onboarding/your-skills' element={<YourSkills />} />
        <Route path='/dashboard' element={
      <Box sx={{ display: 'flex' }}>
        <SideMenu />
        <DashBoard />
      </Box>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;