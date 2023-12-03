import { Outlet } from 'react-router-dom'

import { useState } from 'react'
import { Box } from '@mui/material'

import SideMenu from '../Main/SideMenu/SideMenu'
import MainHeader from './MainHeader/MainHeader'
import TabsPanel from './TabsPanel/TabsPanel'
import Board from '../Board/Board'
import DashBoard from '../DashBoard/DashBoard'
import NewSkill from '../NewSkill/NewSkill'
import Skill from '../Skill/Skill'

import SkillsToLearnMenu from './SkillsToLearnMenu/SkillsToLearnMenu'

export default function Main() {

  const [isSkillsToLearnMenuOpen, setIsSkillsToLearnMenuOpen] = useState(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <SideMenu setIsOpen={setIsSkillsToLearnMenuOpen} />
      <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative', width: '1180px', bgcolor: 'grey.main' }}>
        <SkillsToLearnMenu isOpen={isSkillsToLearnMenuOpen} setIsOpen={setIsSkillsToLearnMenuOpen} />
        <MainHeader />
        <Outlet />
      </Box>
    </Box>
  )
}
