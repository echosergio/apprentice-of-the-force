import { useEffect, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { FaRegCircleUser } from 'react-icons/fa6';
import { styled } from 'styled-components';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarSubMenu,
  SidebarToggle,
} from '.';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { AVATAR_STATUS, Avatar } from '../avatar';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    collapsed: false,
    toggled: false,
  },
  render: function Render(args) {
    const windowSize = useWindowSize();

    const [toggled, setToggled] = useState(args.toggled);
    const [collapsed, setCollapsed] = useState(args.collapsed);

    useEffect(() => {
      setCollapsed(windowSize.width < 768);
    }, [windowSize]);

    return (
      <StyledStory>
        <Sidebar
          style={{ height: '100dvh' }}
          toggled={toggled}
          collapsed={collapsed}
          onToggle={() => {
            setToggled(!toggled);
          }}
        >
          <StyledSidebarHeader>Apprentice of the Force</StyledSidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>No icon</SidebarMenuItem>
              <SidebarMenuItem icon={<FaRegCircleUser />} active>
                Builder
              </SidebarMenuItem>
              <SidebarMenuItem icon={<FaRegCircleUser />}>Large menu item with a lot of text</SidebarMenuItem>
              <SidebarSubMenu title="First submenu" icon={<FaRegCircleUser />}>
                <SidebarMenuItem>Another item</SidebarMenuItem>
                <SidebarSubMenu title="Submenu" active>
                  <SidebarMenuItem>More items with large text</SidebarMenuItem>
                  <SidebarMenuItem>Another item</SidebarMenuItem>
                  <SidebarSubMenu title="Submenu2">
                    <SidebarMenuItem>More items</SidebarMenuItem>
                    <SidebarMenuItem>Another item</SidebarMenuItem>
                    <SidebarMenuItem>More items</SidebarMenuItem>
                    <SidebarMenuItem>Another item</SidebarMenuItem>
                  </SidebarSubMenu>
                </SidebarSubMenu>
                <SidebarMenuItem>More items</SidebarMenuItem>
                <SidebarMenuItem>Another item</SidebarMenuItem>
              </SidebarSubMenu>
              <SidebarSubMenu title="Another submenu" icon={<FaRegCircleUser />}>
                <SidebarMenuItem>Another item</SidebarMenuItem>
                <SidebarSubMenu title="Submenu" active>
                  <SidebarMenuItem>More items</SidebarMenuItem>
                  <SidebarMenuItem>Another item</SidebarMenuItem>
                </SidebarSubMenu>
                <SidebarMenuItem>More items</SidebarMenuItem>
                <SidebarMenuItem>Another item</SidebarMenuItem>
              </SidebarSubMenu>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarSubMenu title="Help" icon={<FaRegCircleUser />} variant="secondary">
                <SidebarMenuItem>Dev documentation</SidebarMenuItem>
                <SidebarMenuItem>Another item</SidebarMenuItem>
              </SidebarSubMenu>
              <SidebarSubMenu
                title="Avatar"
                icon={<Avatar status={AVATAR_STATUS.ONLINE} size="sm" />}
                variant="secondary"
              >
                <SidebarMenuItem icon={<FaRegCircleUser />}>More items</SidebarMenuItem>
                <SidebarMenuItem icon={<FaRegCircleUser />}>More items</SidebarMenuItem>
                <SidebarMenuItem>More items</SidebarMenuItem>
                <SidebarSubMenu title="Submenu" variant="secondary">
                  <SidebarMenuItem>More items</SidebarMenuItem>
                  <SidebarMenuItem>Another item</SidebarMenuItem>
                </SidebarSubMenu>
              </SidebarSubMenu>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        {collapsed && (
          <SidebarToggle
            onClick={() => {
              setToggled(!toggled);
            }}
          >
            <FaRegCircleUser />
          </SidebarToggle>
        )}
      </StyledStory>
    );
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {};

const StyledStory = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 10px;
`;

const StyledSidebarHeader = styled(SidebarHeader)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 20px 20px 20px;
  font-size: ${(props) => props.theme.font.size.xxl};
  text-align: center;
  font-family: ${({ theme }) => theme.font.family.accent};
  text-shadow: #fc0 1px 0 10px;
`;
