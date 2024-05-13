import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import { ThemeContextProvider } from './context/ThemeContext.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </StrictMode>,
);
