import { styled } from 'styled-components';

interface StyledMenuItemProps {
  $active?: boolean;
  $firstchild?: boolean;
}

export const StyledMenuItem = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const StyledItem = styled.div<StyledMenuItemProps>`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.secondary.main};
  }

  ${({ $firstchild }) =>
    $firstchild
      ? `
        min-height: 50px;
      `
      : `
        min-height: 30px;
      `}

  ${({ $active, theme }) =>
    $active &&
    `
      color: ${theme.color.primary.main};
    `}
`;

export const StyledInnerItem = styled.div`
  padding: 5px 0px 5px 30px;
`;
