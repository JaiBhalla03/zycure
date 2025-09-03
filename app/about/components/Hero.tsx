import SmallHeading from '@/app/components/utils/SmallHeading';
import { ArrowDown } from 'lucide-react';
import React from 'react';

const Hero = () => {
    return (
        <div className='md:h-screen bg-black px-4 md:px-20 py-5 md:py-10 flex flex-col md:flex-row gap-5 md:gap-0 justify-center items-center text-white'>
            <div className='w-full md:w-1/2 flex flex-col justify-between md:h-full pt-14 md:pt-28'>
                <div>
                    <SmallHeading heading="ABOUT US"/>
                    <h1 className='text-4xl md:text-6xl font-semibold'>About Us</h1>
                </div>
                <div className='hidden md:flex border border-solid rounded-sm p-4 w-min'>
                    <ArrowDown />
                </div>
            </div>
            <div className='text-sm md:text-lg w-full md:w-1/2 h-full flex flex-col gap-5 md:gap-0 justify-end'>
               Zycure Biotech, headquartered in Hyderabad, India, and its Parent division Zychor Biologicals,specializing in Ortho, have been operating pan-India for 3 years. <i className='text-teal-800 not-italic'>We have recently partnered with top pharma companies like Natco Pharma, Akums, Heil Pharma, and Intas Pharma for manufacturing.
               </i>
               <div className='flex md:hidden border border-solid rounded-sm p-4 w-min m-auto'>
                    <ArrowDown />
                </div>
            </div>
        </div>
    );
};

export default Hero;