import React from 'react'
import './App.css'
import Home from './Home'
import Mainproduct from './components/Mainproduct'
import { Routes, Route } from 'react-router-dom'
function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product' element={<Mainproduct />} />
    </Routes>
    </>
  );
}

export default App;
