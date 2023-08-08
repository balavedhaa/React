import logo from './logo.svg';
import './App.css';
import * as React from 'react';
// import tony from "./tony.jpeg";
// import aidslogo from "./CYAN_PNG.png"
// import bg from "./bg.jpg"
// import { render } from '@testing-library/react';
// import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Components/Layout.js';  
import Resume from './Components/Resume.js';
import Projects from './Components/Projects.js';
import Profile from './Components/Profile.js';

function App() {

  // const [show,setshow]=useState(false)

  // function myfunhome1(){
  //   setshow(!show)
  // }
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Profile />} /> 
        <Route path="Resume"  element={<Resume />} />
        <Route path="Projects" element={<Projects />} />
        </Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
};


export default App;
