import React, {useState,useEffect} from 'react';
import {Routes, Route, Navigate, NavLink, useNavigate} from 'react-router-dom';
import './App.css';
import Banner from './components/banner/banner';
import Header from './components/header/header';
import Welcome from './components/welcome/welcome';
import Footer from './components/footer/footer';
import About from './pages/about/about';



function App() {
  return (
    <div className="App">

     <Banner />
     <Header />
     <Welcome  /> 
     
   


    
    
    
    
    
     <Routes>
        <Route >  </Route>
        <Route ></Route>
      </Routes>
    </div>
  );
}

export default App;
