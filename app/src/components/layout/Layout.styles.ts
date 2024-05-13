import { styled } from 'styled-components';

export const StyledLayout = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex: auto;

  *:focus-visible {
    outline: none;
  }
`;

export const StyledMain = styled.main`
  flex: auto;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  position: relative;
`;
