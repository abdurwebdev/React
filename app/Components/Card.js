"use client"
import React from 'react'
import { AiFillMeh } from "react-icons/ai";
const Card = () => {
  return (
    <div className='grid grid-cols-1  xl:h-[670px]    h-[200vh] md:h-[800px]  md:grid md:grid-cols-3 p-10  mt-10 gap-8'>
<div className='w-72 h-96 rounded-xl bg-[#222222] md:hover:z-50 m-auto hover:transition-transform duration-1000  hover:duration-1000 hover:scale-125'>
    <div className='flex flex-col items-center p-4 justify-center text-white'>
             <AiFillMeh className='text-8xl'/>
             <h1 className='font-semibold text-xl'>Single User</h1>
             <h1 className='mt-5 border-b w-[80%] text-center'>500 GB Storage</h1>
             <h1 className='mt-5 border-b w-[80%] text-center'>1 User Allowed</h1>
             <h1 className='mt-5 border-b w-[80%] text-center'>Send Up To 2GB</h1>
             <button className='mt-10 px-10 py-3 rounded-xl bg-green-500 hover:transition-colors  hover:bg-black'>Start Trail</button>
    </div>
</div>



<div className='w-72 h-96 rounded-xl bg-white  m-auto  xl:scale-150 md:scale-150 scale-100'>
    <div className='flex flex-col items-center p-4 justify-center text-black'>
             <AiFillMeh className='text-8xl '/>
             <h1 className='font-semibold text-xl'>Single User</h1>
             <h1 className='mt-5 border-b w-[80%] text-center'>500 GB Storage</h1>
             <h1 className='mt-5 border-b w-[80%] text-center'>1 User Allowed</h1>
             <h1 className='mt-5 border-b w-[80%] text-center'>Send Up To 2GB</h1>
             <button className='mt-10 px-10 py-3 rounded-xl bg-green-500 hover:transition-colors hover:text-white  hover:bg-black'>Start Trail</button>
    </div>
</div>




<div className='w-72 h-96 rounded-xl bg-[#222222] m-auto hover:transition-transform duration-1000  hover:duration-1000 hover:scale-125'>
    <div className='flex flex-col items-center p-4 justify-center text-white'>
             <AiFillMeh className='text-8xl'/>
             <h1 className='font-semibold text-xl'>Single User</h1>
             <h1 className='mt-5 border-b w-[80%] text-center'>500 GB Storage</h1>
             <h1 className='mt-5 border-b w-[80%] text-center'>1 User Allowed</h1>
             <h1 className='mt-5 border-b w-[80%] text-center'>Send Up To 2GB</h1>
             <button className='mt-10 px-10 py-3 rounded-xl bg-green-500 hover:transition-colors  hover:bg-black'>Start Trail</button>
    </div>
</div>
    </div>
    
  )
}

export default Card