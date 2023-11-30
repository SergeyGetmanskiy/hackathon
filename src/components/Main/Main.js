import { useState } from 'react'
import { Box } from '@mui/material'

import SideMenu from '../Main/SideMenu/SideMenu'
import MainHeader from './MainHeader/MainHeader'
import TabsPanel from './TabsPanel/TabsPanel'
import Board from '../Board/Board'
import DashBoard from '../DashBoard/DashBoard'
import NewSkill from '../NewSkill/NewSkill'

import SkillsToLearnMenu from './SkillsToLearnMenu/SkillsToLearnMenu'

export default function Main() {

  const [isSkillsToLearnMenuOpen, setIsSkillsToLearnMenuOpen] = useState(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <SideMenu setIsOpen={setIsSkillsToLearnMenuOpen} />
      <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
        <SkillsToLearnMenu isOpen={isSkillsToLearnMenuOpen} setIsOpen={setIsSkillsToLearnMenuOpen} />
        <MainHeader />
        <NewSkill />
      {/*  <TabsPanel board={<Board />} dashBoard={<DashBoard />}  /> */}
      </Box>
    </Box>
  )
}
