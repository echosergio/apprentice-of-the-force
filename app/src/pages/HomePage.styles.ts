import { styled } from 'styled-components';

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const StyledTitle = styled.span`
  font-size: 28px;
  margin-bottom: 40px;
`;

export const StyledMainImage = styled.img`
  width: 500px;
  max-width: 80%;
  height: auto;
`;

export const StyledButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: baseline;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const StyledSide = styled.div`
  font-weight: ${(props) => props.theme.font.weight.medium};
  cursor: pointer;
`;

export const StyledDarkSide = styled(StyledSide)`
  font-family: ${({ theme }) => theme.font.family.darkSide};
  font-size: 50px;
  color: ${({ theme }) => theme.color.danger.main};

  &:hover {
    text-shadow: ${({ theme }) => theme.color.danger.main} 0px 0 10px;
  }
`;

export const StyledLightSide = styled(StyledSide)`
  font-family: ${({ theme }) => theme.font.family.lightSide};
  font-size: 40px;
  color: ${({ theme }) => theme.color.success.main};

  &:hover {
    text-shadow: ${({ theme }) => theme.color.success.main} 0px 0 10px;
  }
`;
