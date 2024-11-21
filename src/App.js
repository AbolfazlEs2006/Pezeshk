import React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
// import Main from './components/Main'
// import Services from './components/Services'
// import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </>
  );
}

export default App;
