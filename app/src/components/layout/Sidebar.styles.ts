import { styled } from 'styled-components';

import { SidebarHeader } from '../ui/sidebar';

export const StyledSidebar = styled.div`
  font-size: ${(props) => props.theme.font.size.md};
  font-weight: ${(props) => props.theme.font.weight.medium};
`;

export const StyledSidebarHeader = styled(SidebarHeader)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 40px 20px 20px 20px;
  font-size: ${(props) => props.theme.font.size.xxl};
  text-align: center;
  font-family: ${({ theme }) => theme.font.family.accent};
  text-shadow: ${({ theme }) => theme.color.secondary.light} 1px 0 5px;
  color: ${({ theme }) => theme.color.secondary.light};
`;

export const StyledSidebarLogo = styled.img`
  width: 80px;
  height: 80px;
`;
