export interface Theme {
  color: {
    primary: {
      main: string;
      contrast: string;
      shade: string;
      tint: string;
      light: string;
    };
    secondary: {
      main: string;
      contrast: string;
      shade: string;
      tint: string;
      light: string;
    };
    success: {
      main: string;
      contrast: string;
      shade: string;
      tint: string;
      light: string;
    };
    warning: {
      main: string;
      contrast: string;
      shade: string;
      tint: string;
      light: string;
    };
    danger: {
      main: string;
      contrast: string;
      shade: string;
      tint: string;
      light: string;
    };
    background: {
      base: string;
      main: string;
      shadow: string;
      soft: string;
    };
  };
  font: {
    family: {
      base: string;
      heading: string;
      monospace: string;
    };
    size: {
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    weight: {
      thin: number;
      extralight: number;
      light: number;
      regular: number;
      medium: number;
      semibold: number;
      bold: number;
      extrabold: number;
      black: number;
    };
  };
}

export const lightTheme: Theme = {
  color: {
    primary: {
      main: '#47428b',
      contrast: '#ffffff',
      shade: '#657d8c',
      tint: '#5d58a1',
      light: '#d8e2ec',
    },
    secondary: {
      main: '#3d4975',
      contrast: '#ffffff',
      shade: '#5a5a5a',
      tint: '#4d4d4d',
      light: '#e1e1e1',
    },
    success: {
      main: '#40945a',
      contrast: '#ffffff',
      shade: '#d7f7c2',
      tint: '#44e283',
      light: '#6dffa7',
    },
    warning: {
      main: '#ffd534',
      contrast: '#000000',
      shade: '#fcedb9',
      tint: '#ffd948',
      light: '#ffea94',
    },
    danger: {
      main: '#d32130',
      contrast: '#ffffff',
      shade: '#ffe7f2',
      tint: '#b3063d',
      light: '#f8a28b',
    },
    background: {
      base: '#f9f9f9',
      main: '#fbfbfb',
      shadow: 'rgba(119, 84, 185, 0.2)',
      soft: '#d0d0d0',
    },
  },
  font: {
    family: {
      base: "'Work Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
      heading:
        "'Gabarito', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
      monospace: "'Cascadia Code', Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
    },
    size: {
      xxs: '10px',
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '20px',
      xxl: '24px',
    },
    weight: {
      thin: 100,
      extralight: 200,
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
  },
};

export const darkTheme: Theme = {
  color: {
    primary: {
      main: '#dddddd',
      contrast: '#32323a',
      shade: '#969696',
      tint: '#b5bfe2',
      light: '#898c91',
    },
    secondary: {
      main: '#3d4975',
      contrast: '#ffffff',
      shade: '#5a5a5a',
      tint: '#4d4d4d',
      light: '#e1e1e1',
    },
    success: {
      main: '#40945a',
      contrast: '#ffffff',
      shade: '#d7f7c2',
      tint: '#44e283',
      light: '#6dffa7',
    },
    warning: {
      main: '#ffd534',
      contrast: '#000000',
      shade: '#fcedb9',
      tint: '#ffd948',
      light: '#ffea94',
    },
    danger: {
      main: '#e86767',
      contrast: '#ffffff',
      shade: '#853c2a',
      tint: '#ed7d61',
      light: '#f8a28b',
    },
    background: {
      base: '#222327',
      main: '#27292e',
      shadow: 'rgba(0, 0, 0, 0.2)',
      soft: '#696969',
    },
  },
  font: {
    family: {
      base: "'Work Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
      heading:
        "'Gabarito', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
      monospace: "'Cascadia Code', Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
    },
    size: {
      xxs: '10px',
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '20px',
      xxl: '24px',
    },
    weight: {
      thin: 100,
      extralight: 200,
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
  },
};
