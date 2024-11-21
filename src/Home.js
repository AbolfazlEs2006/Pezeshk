import React from 'react'
import SubHeader from './components/SubHeader'
import Main from './components/Main'
import Header from './components/Header'
import Services from './components/Services'
import Doctor from './components/Doctor'
import Product from './components/Product'
import Send from './components/Send'
import Specifications from './components/Specifications'
import Footer from './components/Footer'


export default function Home() {
  return (
    <>
    <Header />
    <SubHeader />
    <Main />
    <Services />
    <Doctor />
    <Product />
    <Send />
    <Specifications />
    <Footer />
    </>
  )
}
