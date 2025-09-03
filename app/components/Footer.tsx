import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div className='bg-black py-4 text-white'>
      <h1 className='text-center text-gray-600/50 font-extrabold text-6xl md:text-8xl tracking-wider whitespace-nowrap overflow-hidden'>zycure Biotech</h1>
      <div className='flex flex-col md:flex-row justify-between gap-4 md:gap-0 px-4 md:px-20 items-center mt-4 md:mt-10 md:h-32'>
        <div className='flex flex-col h-full justify-between'>
          <Image src="/logo.png" alt="" width={60} height={20} className='mx-auto md:mx-0'/>
          <i className='not-italic text-xs text-gray-300'>© 2025-Present</i>
        </div>
        <div>
          <h1 className='text-center md:text-start text-xs font-light text-gray-300'>Menu</h1>
          <ul className='text-sm'>
            <li className='text-center md:text-start'>Home</li>
            <li className='text-center md:text-start'>About Us</li>
            <li className='text-center md:text-start'>Products</li>
            <li className='text-center md:text-start'>Careers</li>
            <li className='text-center md:text-start'>Contact Us</li>
          </ul>
        </div>
        <div>
          <h1 className='text-center md:text-start text-xs font-light text-gray-300'>Contact Us</h1>
          <a className='text-center md:text-start text-sm'>zycurebiotech@gmail.com</a>
        </div>
      </div>
    </div>
  )
}
