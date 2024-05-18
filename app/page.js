"use client"
import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import DashBoard from './Components/DashBoard'
import Newsletter from './Components/Newsletter'
import Card from './Components/Card'
import Footer from './Components/Footer'

const page = () => {
  return (
    <>

    <Header/>
    <Hero/>

    <DashBoard/>
    
      <Newsletter/>
<Card/>
<Footer/>
   
    </>
  )
}

export default page