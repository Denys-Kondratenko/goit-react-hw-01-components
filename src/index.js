import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';

const theme = {
  colors: {
    white: '#fff',
    black: '#212121',
    gray: '#e9e9e9',
    secondText: '#a8a7a7',
    backgroundColor: '#ebebeb',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
