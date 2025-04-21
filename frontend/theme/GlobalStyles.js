import { createGlobalStyle } from 'styled-components';
import theme from '../theme';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Special+Gothic+Expanded+One&display=swap');

  body {
    font-family: ${theme.fontPrimary}; /* Use the font from your theme */
    /* Other global styles */
  }
`;

export default GlobalStyle;
