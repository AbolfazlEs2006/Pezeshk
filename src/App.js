import React from 'react'
import SubHeader from './components/SubHeader'
import Main from './components/Main'
import Services from './components/Services'
import Header from './components/Header'
import './App.css'
// import Main from './components/Main'
// import Services from './components/Services'
// import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Header />
      <SubHeader />
      <Main />
      <Services />
    </>
  );
}

export default App;
