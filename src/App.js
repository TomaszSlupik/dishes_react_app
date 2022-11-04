
import { Snackbar } from '@mui/material';
import React from 'react';
import './App.css';
import ProgressFullScren from './components/ProgressFullScren/ProgressFullScren';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Snackbars from './components/Snackbars/Snackbars';
import Drawer from './components/Drawer/Drawer';
import MenuAppBar from './components/MenuAppBar/MenuAppBar';
import {BrowserRouter} from 'react-router-dom' 

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <MenuAppBar />
        <Drawer />
        </BrowserRouter>

        <ProgressFullScren />
        <Snackbars />
        <ScrollToTop />  
    </div>
  );
}

export default App;
