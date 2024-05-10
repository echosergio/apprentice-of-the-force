import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    font-family: ${(props) => props.theme.font.family.base};
    font-size: ${(props) => props.theme.font.size.md};
    font-weight: ${(props) => props.theme.font.weight.regular};

    color-scheme: light dark;
    color: ${(props) => props.theme.color.primary.main};
    background-color: ${(props) => props.theme.color.background.base};

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html,
  body {
    margin: 0;
    height: -moz-available;
    height: -webkit-fill-available;
    height: stretch;
    min-width: 300px;
    line-height: 1.4;
  }

  #root {
    height: -moz-available;
    height: -webkit-fill-available;
    height: stretch;
    height: 100dvh;
    width: 100%;
    min-width: 300px;
    background-color: ${(props) => props.theme.color.background.base};
    display: flex;
    flex-direction: column;
    font-family: ${(props) => props.theme.font.family.base};
    font-size: ${(props) => props.theme.font.size.md};
    font-weight: ${(props) => props.theme.font.weight.regular};
    color: ${(props) => props.theme.color.primary.main};
  }

  a:link,
  a:visited,
  a:hover,
  a:active {
    color: ${(props) => props.theme.color.primary.main};
    text-decoration: none !important;
  }

  ::-webkit-scrollbar {
    width: 22px;
    height: 0;
    background-color: ${(props) => props.theme.color.background.base};
  }

  ::-webkit-scrollbar-thumb {
    height: 1em;
    border: 8px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    -webkit-border-radius: 1em;
    background-color: ${(props) => props.theme.color.background.soft};
    -webkit-box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.025);
  }

  ::-webkit-scrollbar-button {
    width: 0;
    height: 0;
    display: none;
  }

  ::-webkit-scrollbar-corner {
    background-color: transparent;
  }

  *:focus {
    outline: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`;

export default GlobalStyle;
