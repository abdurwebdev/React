"use client"
import React from 'react'

const Newsletter = () => {
  return (
    <div className='grid grid-cols-1  m-auto w-[70%]  xl:gap-5 md:grid md:grid-cols-2 mt-20 xl:grid overflow-hidden xl:grid-cols-2  h-[40%] items-center justify-center '>
        <div>
            <h1 className='capitalize text-black sm:text-[4vw] md:text-[1.5vw] xl:text-[2vw] text-[5vw] font-bold text-left'>want tips and tricks to optimize your flow</h1>
            <h1 className='capitalize text-black sm:text-[4vw] md:text-[1.5vw] xl:text-[2vw] text-[5vw] font-bold text-left'>sign up to our newsletter and stay up to date</h1>
        </div>
        <div>

                <input type="text" placeholder='Enter Your Email' className='border sm:mt-10 rounded-md px-3 py-3 bg-transparent text-left' />
                <button className='mb-4 px-3 py-3 mt-4 rounded-md border-white bg-white text-black hover:transition-colors hover:bg-black hover:text-white'>Notify Me</button>
            
            <h1  className='capitalize xl:text-[2vw] sm:text-[4vw] md:text-[1.5vw]  text-[4vw] font-bold text-black text-left'>We can bout the Protection Of Your Data.Read Our Privay And Policy</h1>
        </div>
    </div>
  )
}

export default Newsletter