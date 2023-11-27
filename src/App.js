import { Box } from "@mui/material";
import { Counter } from "./components/Counter/Counter";
import { DashBoard } from "./components/DashBoard/DashBoard";
import SideMenu from "./components/SideMenu/SideMenu";

function App() {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <SideMenu />
        <DashBoard />
      </Box>
      
    </>
  );
}

export default App;
