import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useState } from 'react';

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
  theme: darkTheme,
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

  return <ThemeContext.Provider value={{ scheme, theme: THEMES[scheme], setScheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeContextProvider');
  }

  return context;
};
