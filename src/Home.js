import React from 'react'
import SubHeader from './components/SubHeader'
import Main from './components/Main'
import Header from './components/Header'
import Services from './components/Services'
import Doctor from './components/Doctor'
import Product from './components/Product'
import Send from './components/Send'
import Footer from './components/Footer'
import Title from './components/Title'


export default function Home() {
  return (
    <>
    <Header />
    <SubHeader />
    <Main />
    <Title title='خدمات پزشکیار'/>
    <Services />
    <Title title='متخصصین پزشکیار' />
    <Doctor />
    <Title title='محصولات ما' link='product'/>
    <Product />
    <Send />
    <Footer />
    </>
  )
}
