import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div className='bg-black py-4 text-white'>
      <h1 className='text-center text-gray-600/50 font-extrabold text-8xl tracking-wider whitespace-nowrap'>zycure Biologicals</h1>
      <div className='flex justify-between px-20 items-center mt-10 h-32'>
        <div className='flex flex-col h-full justify-between'>
          <Image src="/logo.png" alt="" width={60} height={20}/>
          <i className='not-italic text-xs text-gray-300'>© 2025-Present</i>
        </div>
        <div>
          <h1 className='text-xs font-light text-gray-300'>Menu</h1>
          <ul className='text-sm'>
            <li>Home</li>
            <li>About Us</li>
            <li>Products</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h1 className='text-xs font-light text-gray-300'>Contact Us</h1>
          <a className='text-sm'>zycurebiotech@gmail.com</a>
        </div>
      </div>
    </div>
  )
}
