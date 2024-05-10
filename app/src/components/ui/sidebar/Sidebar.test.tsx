import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { FaRegCircleUser } from 'react-icons/fa6';

import { Sidebar } from './Sidebar';
import { SidebarProps } from './Sidebar.types';
import { SidebarContent } from './components/layout/Content';
import { SidebarFooter } from './components/layout/Footer';
import { SidebarHeader } from './components/layout/Header';
import { SidebarLogo } from './components/layout/Logo';
import { SidebarMenu } from './components/menu/Menu';
import { SidebarMenuItem } from './components/menu/MenuItem';
import { SidebarSubMenu } from './components/menu/SubMenu';

const renderComponent = (props: Partial<SidebarProps> = {}) =>
  render(
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarLogo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem icon={<FaRegCircleUser />}>OpenAI</SidebarMenuItem>
          <SidebarSubMenu title="More items" icon={<FaRegCircleUser data-testid="more-items-icon" />}>
            <SidebarMenuItem>Other item</SidebarMenuItem>
            <SidebarMenuItem>Another item</SidebarMenuItem>
            <SidebarSubMenu title="Submenu">
              <SidebarMenuItem>Submenu items</SidebarMenuItem>
              <SidebarMenuItem>Submenu another item</SidebarMenuItem>
            </SidebarSubMenu>
          </SidebarSubMenu>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarSubMenu title="Help" icon={<FaRegCircleUser />} variant="secondary">
            <SidebarMenuItem icon={<FaRegCircleUser />}>Help item</SidebarMenuItem>
            <SidebarMenuItem>Help another item</SidebarMenuItem>
          </SidebarSubMenu>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>,
  );

describe('Sidebar', () => {
  it('Should render when collapsed status is false and toggled', () => {
    renderComponent({
      toggled: true,
    });

    expect(screen.queryByText('OpenAI')).not.toBeInTheDocument();
    expect(screen.queryByText('More items')).not.toBeInTheDocument();
    expect(screen.queryByText('Other item')).not.toBeInTheDocument();
    expect(screen.queryByText('Another item')).not.toBeInTheDocument();
    expect(screen.queryByText('Submenu')).not.toBeInTheDocument();
    expect(screen.queryByText('Submenu items')).not.toBeInTheDocument();
    expect(screen.queryByText('Submenu another item')).not.toBeInTheDocument();
    expect(screen.queryByText('Help')).not.toBeInTheDocument();
    expect(screen.queryByText('Help item')).not.toBeInTheDocument();
    expect(screen.queryByText('Help another item')).not.toBeInTheDocument();
  });

  it('Should render when click on icon, collapsed status is false and is toggled', async () => {
    renderComponent({
      toggled: true,
    });

    await userEvent.click(screen.getByTestId('more-items-icon'));

    expect(screen.getByText('Other item')).toBeVisible();
    expect(screen.getByText('Another item')).toBeVisible();
    expect(screen.getByText('Submenu')).toBeVisible();
  });

  it('Should render minify button', async () => {
    renderComponent();

    await userEvent.hover(screen.getByText('OpenAI'));

    expect(screen.getByLabelText('minify-button')).toBeVisible();
  });

  it('Should render minify button and click', async () => {
    renderComponent();

    await userEvent.hover(screen.getByText('OpenAI'));
    await userEvent.click(screen.getByLabelText('minify-button'));

    expect(screen.queryByLabelText('minify-button')).not.toBeInTheDocument();
  });
});
