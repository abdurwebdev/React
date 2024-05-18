"use client"
import React from 'react'

const DashBoard = () => {
  return (
    <div className='w-[75%] m-auto h-[50%]  gap-0 xl:gap-10 md:gap-5   mt-20 grid grid-cols-1   sm:grid sm:grid-cols-1  md:grid md:grid-cols-2 overflow-hidden xl:grid xl:grid-cols-2'>
        <div>
            <img className='w-62 h-62 rounded-2xl' src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"   />
        </div>
        <div className='flex flex-col   text-black'>
            <h1 className='capitalize  md:text-[2vw]  xl:text-2xl font-bold text-black'>Data analytics dashboard</h1>
            <h1 className='capitalize md:text-[2vw]  xl:text-4xl font-bold text-black'>manage data analytics centrally</h1>
            <p className=' font-normal md:text-[1.5vw] xl:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, dolorum minus in obcaecati maiores mollitia ipsum. Est soluta quasi quibusdam ipsum minima in natus voluptas alias deleniti porro, iusto assumenda?</p>
            <button className='px-3 py-3 mt-2 w-36  rounded-md border-white bg-white text-black hover:transition-colors hover:bg-black hover:text-white'>Get Started</button>
        </div>
    </div>
  )
}

export default DashBoard