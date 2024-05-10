import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useLayoutEffect,
  useState,
} from 'react';

import { Theme, darkTheme, lightTheme } from '../styles/theme';

export type ColorScheme = 'light' | 'dark';

const THEMES: Record<ColorScheme, Theme> = {
  light: lightTheme,
  dark: darkTheme,
};

export type ThemeProps = {
  scheme: ColorScheme;
  theme: Theme;
  setScheme: Dispatch<SetStateAction<ColorScheme>>;
};

export const ThemeContext = createContext({
  scheme: 'dark',
} as ThemeProps);

export const ThemeContextProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  function getColorScheme(): ColorScheme {
    if (prefersDark) {
      return 'dark';
    }

    return 'light';
  }

  const [scheme, setScheme] = useState<ColorScheme>(getColorScheme());

  useLayoutEffect(() => {
    if (scheme === 'dark') {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [scheme]);

  return <ThemeContext.Provider value={{ scheme, theme: THEMES[scheme], setScheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext<ThemeProps>(ThemeContext);
