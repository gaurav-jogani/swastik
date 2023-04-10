import React from 'react';
import './App.css';
import SplashScreen from './Components/SplashScreen';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SelectLanguage from './Components/SelectLanguage';
import SwastikClinic from './Components/SwastikClinic';
import Myappointment from './Components/myappointment';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/splashScreen' element = { <SplashScreen /> } />
          <Route path='/selectLang' element = { <SelectLanguage /> } />
          <Route path='/swastikClinic' element = { <SwastikClinic /> } />
          <Route path='/swastikClinic/Myappointment' element = { <Myappointment /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
