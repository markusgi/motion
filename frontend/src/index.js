import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle, defaultTheme } from './style';

import Routes from './routes';

import { Provider } from 'react-redux';
import store from './store'


ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);