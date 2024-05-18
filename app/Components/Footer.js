"use client"
import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillTwitterSquare, AiFillYoutube } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='p-16 w-full xl:h-[70vh] m-auto bg-[#222222]'>
        <div className='grid grid-cols-1 sm:grid  md:grid xl:grid xl:grid-cols-6 md:grid-cols-3 sm:gap-10 sm:grid-cols-2 w-[100%] '>
            <div className='xl:col-span-2  xl:row-span-2 sm:col-span-2 sm:row-span-2'>
            <h1 className='text-4xl font-bold text-white '>REACT.</h1>
            <p className=' font-normal text-xl text-white '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis earum deleniti, optio, dolorem minima nihil mollitia sapiente repellat blanditiis consectetur qui iste modi, commodi adipisci possimus provident quos quaerat nam!</p>
            <div className='flex gap-5 mt-5'>
                <AiFillInstagram className='w-14 h-14 hover:transition-colors hover:text-[#ECECEC]'/>
                <AiFillYoutube className='w-14 h-14 hover:transition-colors hover:text-[#ECECEC]'/>
                <AiFillTwitterCircle className='w-14 h-14 hover:transition-colors hover:text-[#ECECEC]'/>
                <AiFillFacebook className='w-14 h-14 hover:transition-colors hover:text-[#ECECEC]'/>
            </div>
            </div> 
            <div className='space-y-4'>
                <h1 className='text-4xl font-bold text-[#ECECEC] '>Solutions</h1>
                <h1 className=' text-xl text-white '>Analytics</h1>
                <h1 className=' text-xl text-white '>Marketing</h1>
                <h1 className=' text-xl text-white '>Commerce</h1>
                <h1 className=' text-xl text-white '>Insights</h1>
            </div>
            <div className='space-y-4'>
                <h1 className='text-4xl font-bold text-[#ECECEC] '>Pricing</h1>
                <h1 className=' text-xl text-white '>Documentation</h1>
                <h1 className=' text-xl text-white '>Guides</h1>
                <h1 className=' text-xl text-white '>API Status</h1>
            </div>
            <div className='space-y-4'>
                <h1 className='text-4xl font-bold text-[#ECECEC] '>Company</h1>
                <h1 className=' text-xl text-white '>About</h1>
                <h1 className=' text-xl text-white '>Blog</h1>
                <h1 className=' text-xl text-white '>Job</h1>
                <h1 className=' text-xl text-white '>Press</h1>
            </div>
            <div className='space-y-4'>
                <h1 className='text-4xl font-bold text-[#ECECEC] '>Legal</h1>
                <h1 className=' text-xl text-white '>Claim</h1>
                <h1 className=' text-xl text-white '>Policy</h1>
                <h1 className=' text-xl text-white '>Terms</h1>
            </div>
        </div>
    </div>
  )
}

export default Footer