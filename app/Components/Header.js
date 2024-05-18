"use client"
import React, { useState } from 'react'
import {  AiOutlineMenu } from "react-icons/ai";
import { FcPrevious } from "react-icons/fc";
const Header = () => {
    const [show, setShow] = useState(false);
    const [hide, setHide] = useState(true);
    const showNav=()=>
        {
            var elem=document.getElementById("navBar");
            if(elem)
                {
                    elem.style.left="0px";
                }
            else
            {
                elem.style.left="-100%";
            }
            elem.style.transition="ease 0.5s";
            setShow(!show);
        }
        const hideNav=()=>
            {
                var elem=document.getElementById("navBar");
                if(elem)
                    {
                        elem.style.left="-770px";
                    }
                else
                {
                    elem.style.left="100px";
                }
                elem.style.transition="ease 0.5s";
                setHide(!hide);
            }
  return (
    <div className='w-full flex text-black  items-center overflow-hidden justify-between h-20 px-4 py-4 sm:px-14 md:px-24 xl:px-44 mx-auto'>
        <div>
        <h1 className='text-xl font-bold '>REACT.</h1>
        </div>
        <div className=' gap-5 hidden md:inline-flex md:items-center xl:items-center xl:inline-flex '>
            <h1>Home</h1>
            <h1>Account</h1>
            <h1>Sign In</h1>
            <button className='px-3 py-3 rounded-md border-white bg-white text-black hover:transition-colors hover:bg-black hover:text-white'>Get Started</button>
        </div>
        <div className='md:hidden block xl:hidden'>
             <button onClick={showNav}><AiOutlineMenu className='animate-bounce'/></button>
        </div>
        <div id="navBar" className='top-0  z-50 bg-white w-full h-screen text-black md:hidden xl:hidden left-[-200%]  fixed px-4 py-7 space-y-5 flex  justify-between'>
          <div className='space-y-5'>
               <h1 className='text-xl font-bold '>REACT.</h1>
               <h1>Home</h1>
               <h1>Account</h1>
               <h1>Sign In</h1>
          </div>  
          <div className='mb-10'>
          <button onClick={hideNav} className='absolute top-7 right-5'><FcPrevious className='animate-bounce'/></button>
          </div>
            
        </div>
    </div>
  )
}

export default Header