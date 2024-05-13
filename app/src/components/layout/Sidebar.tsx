import { useEffect, useState } from 'react';

import { FaCode, FaGithub, FaRebel } from 'react-icons/fa6';
import {
  TbDeviceGamepad3,
  TbLayoutSidebarLeftExpand,
  TbSettings,
  TbSourceCode,
  TbUser,
  TbUsersGroup,
} from 'react-icons/tb';

import { useWindowSize } from '../../hooks/useWindowSize';
import { AVATAR_STATUS, Avatar } from '../ui/avatar';
import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarSubMenu,
  SidebarToggle,
} from '../ui/sidebar';

import { StyledSidebarHeader } from './Sidebar.styles';

function Sidebar() {
  const windowSize = useWindowSize();

  const [toggled, setToggled] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    setCollapsed(windowSize.width < 768);
    setToggled(false);
  }, [windowSize]);

  return (
    <>
      <SidebarComponent
        toggled={toggled}
        collapsed={collapsed}
        onToggle={() => {
          setToggled(!toggled);
        }}
      >
        <StyledSidebarHeader>Apprentice of the Force</StyledSidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem icon={<FaRebel />} active>
              Home
            </SidebarMenuItem>
            <SidebarMenuItem icon={<TbDeviceGamepad3 />}>Play</SidebarMenuItem>
            <SidebarSubMenu title="Characters" icon={<TbUsersGroup />}>
              <SidebarSubMenu title="Light Side" active>
                <SidebarMenuItem>Chewbacca</SidebarMenuItem>
                <SidebarMenuItem>Yoda</SidebarMenuItem>
                <SidebarMenuItem>Luke Skywalker</SidebarMenuItem>
                <SidebarMenuItem>Leia Organa</SidebarMenuItem>
                <SidebarMenuItem>Obi-Wan Kenobi</SidebarMenuItem>
                <SidebarMenuItem>Han Solo</SidebarMenuItem>
                <SidebarMenuItem>Mace Windu</SidebarMenuItem>
              </SidebarSubMenu>
              <SidebarSubMenu title="Dark Side" active>
                <SidebarMenuItem>Darth Vader</SidebarMenuItem>
                <SidebarMenuItem>Darth Maul</SidebarMenuItem>
                <SidebarMenuItem>Emperor Palpatine</SidebarMenuItem>
                <SidebarMenuItem>Kylo Ren</SidebarMenuItem>
                <SidebarMenuItem>Captain Phasma</SidebarMenuItem>
                <SidebarMenuItem>Jabba the Hutt</SidebarMenuItem>
                <SidebarMenuItem>Lando Calrissian</SidebarMenuItem>
              </SidebarSubMenu>
            </SidebarSubMenu>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarSubMenu title="Dev" icon={<FaCode />} variant="secondary">
              <SidebarMenuItem icon={<FaGithub />}>GitHub</SidebarMenuItem>
              <SidebarMenuItem icon={<TbSourceCode />}>Documentation</SidebarMenuItem>
            </SidebarSubMenu>
            <SidebarSubMenu
              title="Stormtrooper"
              icon={<Avatar status={AVATAR_STATUS.ONLINE} size="sm" />}
              variant="secondary"
            >
              <SidebarMenuItem icon={<TbUser />}>Account</SidebarMenuItem>
              <SidebarMenuItem icon={<TbSettings />}>Settings</SidebarMenuItem>
            </SidebarSubMenu>
          </SidebarMenu>
        </SidebarFooter>
      </SidebarComponent>
      {collapsed && (
        <SidebarToggle
          onClick={() => {
            setToggled(!toggled);
          }}
        >
          <TbLayoutSidebarLeftExpand />
        </SidebarToggle>
      )}
    </>
  );
}

export default Sidebar;
