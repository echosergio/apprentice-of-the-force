import { useTheme } from '../context/ThemeContext';

import { StyledHome } from './HomePage.styles';

function HomePage() {
  const { scheme, setScheme } = useTheme();

  return (
    <StyledHome>
      <h1>Home Page</h1>
      <p>Current theme: {scheme}</p>
      <button onClick={() => setScheme(scheme === 'light' ? 'dark' : 'light')}>Toggle Theme</button>
    </StyledHome>
  );
}

export default HomePage;
