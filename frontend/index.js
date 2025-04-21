import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';
import './styles/reset.css'
import './styles/styles.css'

import theme from './theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyles';

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
)
