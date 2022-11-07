import React from 'react';
import './App.css';
import ProgressFullScren from './components/ProgressFullScren/ProgressFullScren';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Snackbars from './components/Snackbars/Snackbars';
import Drawer from './components/Drawer/Drawer';
import MenuAppBar from './components/MenuAppBar/MenuAppBar';
import {BrowserRouter, Route} from 'react-router-dom' 
import AddRecipe from './components/AddRecipe/AddRecipe';
import YourRecpie from './components/YourRecipe/YourRecpie';
import Recipe from './components/Recipe/Recipe'
import Dashboard from './components/Dashboard/Dashboard';
import ChangePassword from './components/ChangePassword/ChangePassword';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <MenuAppBar />
        <Drawer />
        <Route path='/' exact component={Dashboard}/>
        <Route path='/add-recipe' component={AddRecipe}/>
        <Route path='/your-recipes' component={YourRecpie}/>
        <Route path='/recipes' component={Recipe}/>
        <Route path='/change-password' component={ChangePassword}/>
        </BrowserRouter>
        <ProgressFullScren />
        <Snackbars />
        <ScrollToTop />  
    </div>
  );
}

export default App;
