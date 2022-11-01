import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { store } from './store';

import App from './App';

import theme from './theme';
import { ThemeProvider } from '@mui/material';



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <ThemeProvider
    theme={theme}
    >
    <App/>
    </ThemeProvider>
    
  </Provider>
)