
import { Snackbar } from '@mui/material';
import React from 'react';
import './App.css';
import ProgressFullScren from './components/ProgressFullScren/ProgressFullScren';
import Snackbars from './components/Snackbars/Snackbars';

function App() {
  return (
    <div className="App">
        <ProgressFullScren />
        <Snackbars />
    </div>
  );
}

export default App;
