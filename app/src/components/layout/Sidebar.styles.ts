import { styled } from 'styled-components';

import { SidebarHeader } from '../ui/sidebar';

export const StyledSidebar = styled.div`
  font-size: ${(props) => props.theme.font.size.md};
  font-weight: ${(props) => props.theme.font.weight.medium};
`;

export const StyledSidebarHeader = styled(SidebarHeader)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 20px 20px 20px;
  font-size: ${(props) => props.theme.font.size.xxl};
  text-align: center;
  font-family: ${({ theme }) => theme.font.family.accent};
  text-shadow: #fc0 1px 0 10px;
`;
