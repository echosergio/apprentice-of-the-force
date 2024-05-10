import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Layout from './components/layout/Layout';
import { useTheme } from './context/ThemeContext';
import HomePage from './pages/HomePage';
import GlobalStyle from './styles/global';

function App() {
  const { theme, scheme, setScheme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
