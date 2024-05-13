import SelectSide from '../assets/images/select-side.png';
import { useTheme } from '../context/ThemeContext';

import {
  StyledButtons,
  StyledDarkSide,
  StyledHome,
  StyledLightSide,
  StyledMainImage,
  StyledTitle,
} from './HomePage.styles';

function HomePage() {
  const { setScheme } = useTheme();

  return (
    <StyledHome>
      <StyledTitle>Choose your side</StyledTitle>
      <StyledMainImage src={SelectSide} alt="placeholder" />
      <StyledButtons>
        <StyledDarkSide onClick={() => setScheme('dark')}>Dark Side</StyledDarkSide>
        <StyledLightSide onClick={() => setScheme('light')}>Light Side</StyledLightSide>
      </StyledButtons>
    </StyledHome>
  );
}

export default HomePage;
