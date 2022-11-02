
import { Snackbar } from '@mui/material';
import React from 'react';
import './App.css';
import ProgressFullScren from './components/ProgressFullScren/ProgressFullScren';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Snackbars from './components/Snackbars/Snackbars';

function App() {
  return (
    <div className="App">
        <ProgressFullScren />
        <Snackbars />
        <ScrollToTop />
    </div>
  );
}

export default App;
