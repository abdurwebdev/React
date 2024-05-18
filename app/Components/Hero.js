"use client"
import React from 'react'
import { ReactTyped } from "react-typed";
const Hero = () => {
  return (
    <div className='flex  items-center p-5 overflow-hidden text-black justify-center mx-auto xl:w-[800px] sm:w-[600px] w-96 h-96 mt-20   flex-col'>
        <h1 className='upper-case text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold'>Grow With Digital Analytics</h1>
        <h1 className='capitalize text-3xl sm:text-4xl md:text-6xl xl:text-8xl font-extrabold'>Grow with data</h1>
        <div className='flex xl:gap-3 gap-1 space-x-2'>
            <h1 className='capitalize  font-bold sm:text-2xl md:text-xl xl:text-4xl '>Fast flexible and financing for </h1>
            <ReactTyped className='capitalize  font-bold sm:text-2xl md:text-xl xl:text-3xl text-slate-600' strings={["BTC","B2B","SAAS"]} typeSpeed={300} backSpeed={70} loop></ReactTyped>
        </div>
        <h1 className='capitalize text-xl text-center font-bold '>Mention Your Dat Analytics to increase revenue for BTB,BTC and SAAS Platforms.</h1>
        <button className='px-3 py-3 mt-4 rounded-md border-white bg-white text-black hover:transition-colors hover:bg-black hover:text-white'>Get Started</button>
    </div>
  )
}

export default Hero