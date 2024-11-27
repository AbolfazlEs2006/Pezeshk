import React from 'react'
import './App.css'
import Home from './Home'
import Mainproduct from './components/Mainproduct'
import { Routes, Route } from 'react-router-dom'
import Aboutproduct from './components/Aboutproduct'
import Pannel from './components/Pannel'
import Loggin from './components/Loggin'
import Signup from './components/Signup'
import Dashboard from './Dashboard'
import Addproduct from './components/Addproduct'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product' element={<Mainproduct />} />
      <Route path='/product/:productID' element={<Aboutproduct />} />
      <Route path='/Myaccount' element={<Pannel />} />
      <Route path='/Loggin' element={<Loggin />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/basket' element={<Dashboard />} />

    </Routes>
    </>
  );
}

export default App;
