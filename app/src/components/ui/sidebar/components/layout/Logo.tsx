import ss from '../../assets/images/avatar.png';
import { SidebarMenuItem } from '../menu/MenuItem';

import { StyledLogo } from './Logo.styles';

export interface LogoProps {
  onClick?: () => void;
}

export const SidebarLogo = ({ onClick }: LogoProps) => (
  <SidebarMenuItem icon={<StyledLogo src={ss} alt="Landbot" />} onClick={onClick}>
    Apprentice of the Force
  </SidebarMenuItem>
);
