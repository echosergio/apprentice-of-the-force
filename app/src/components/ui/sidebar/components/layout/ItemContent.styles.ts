import { styled } from 'styled-components';

interface StyledItemContentProps {
  $firstchild?: boolean;
}

export const StyledIconWrapper = styled.span<StyledItemContentProps>`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;

  ${({ $firstchild }) =>
    $firstchild
      ? `
        min-width: 32px;
        max-width: 32px;
        margin: 0 20px 0 20px;

        svg {
          width: 26px !important;
          height: 26px !important;
        }
      `
      : `
        min-width: 16px;
        max-width: 16px;
        margin: 0 10px 0 0;

        svg {
          width: 16px !important;
          height: 16px !important;
        }
      `}
`;

export const StyledPrefixWrapper = styled.span`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const StyledSufixWrapper = styled.span`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const StyledItemContent = styled.span<StyledItemContentProps>`
  display: flex;
  font-size: ${(props) => props.theme.font.size.md};
  font-weight: ${(props) => props.theme.font.weight.medium};

  &:hover {
    text-shadow: ${({ theme }) => theme.color.primary.main} 0px 0 18px;
  }

  ${({ $firstchild }) =>
    $firstchild &&
    `
      padding: 0 20px 0 0;
    `}
`;
