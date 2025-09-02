import SmallHeading from '@/app/components/utils/SmallHeading';
import { ArrowDown } from 'lucide-react';
import React from 'react';

const Hero = () => {
    return (
        <div className='h-screen bg-black px-20 py-10 flex justify-center items-center text-white'>
            <div className='w-1/2 flex flex-col justify-between h-full pt-28'>
                <div>
                    <SmallHeading heading="ABOUT US"/>
                    <h1 className='text-6xl font-semibold'>About Us</h1>
                </div>
                <div className='border border-solid rounded-sm p-4 w-min'>
                    <ArrowDown />
                </div>
            </div>
            <div className='text-lg w-1/2 h-full flex flex-col justify-end'>
               Zycure Biotech, headquartered in Hyderabad, India, and its Parent division Zychor Biologicals,specializing in Ortho, have been operating pan-India for 3 years. <i className='text-teal-800 not-italic'>We have recently partnered with top pharma companies like Natco Pharma, Akums, Heil Pharma, and Intas Pharma for manufacturing.
               </i>
            </div>
        </div>
    );
};

export default Hero;