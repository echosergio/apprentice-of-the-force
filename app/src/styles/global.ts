import { createGlobalStyle } from 'styled-components';

import CascadiaCode from '../assets/fonts/Cascadia Code/CascadiaMono-Regular.ttf';
import SpaceGrotesk from '../assets/fonts/Space Grotesk/SpaceGrotesk-Medium.ttf';
import DarkSide from '../assets/fonts/Star Wars/Dark Side.ttf';
import StarJediHollow from '../assets/fonts/Star Wars/Star Jedi Hollow.ttf';
import StarJedi from '../assets/fonts/Star Wars/Star Jedi.ttf';
import TieWing from '../assets/fonts/Star Wars/Tie Wing.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Cascadia Code';
    src: url(${CascadiaCode}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Space Grotesk';
    src: url(${SpaceGrotesk}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Dark Side';
    src: url(${DarkSide}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Star Jedi Hollow';
    src: url(${StarJediHollow}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Star Jedi';
    src: url(${StarJedi}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Tie Wing';
    src: url(${TieWing}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

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
