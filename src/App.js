import React from 'react'
import './App.css'
import Home from './Home'
import Mainproduct from './components/Mainproduct'
import { Routes, Route } from 'react-router-dom'
import Aboutproduct from './components/Aboutproduct'
function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product' element={<Mainproduct />} />
      <Route path='/product/:productID' element={<Aboutproduct />} />
    </Routes>
    </>
  );
}

export default App;
