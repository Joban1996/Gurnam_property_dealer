import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './components/header'
import Hero from './components/Hero'
import PropertyTypes from './components/propertyTypes'
import WhyChooseUs from './components/WhyChooseUs'
import LatestProperties from './components/LatestProperties'
import Services from './components/services'
import Testimonials from './components/testimonials'
import Footer from './components/Footer'

function App(){

  return (
    <>
    <Header/>
    <Hero/>
    <PropertyTypes/>
    <WhyChooseUs/>
    <LatestProperties/>
    <Services/>
    <Testimonials/>
    <Footer/>
    </>
  )
}

export default App