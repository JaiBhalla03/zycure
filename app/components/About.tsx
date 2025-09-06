import { MoveUpRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const About = () => {
    return (
        <div className='py-5 md:py-10 px-4 md:px-12'>
            <div className='text-2xl md:text-4xl text-center'>
               Zycure Biotech, headquartered in Hyderabad, India, and its Parent division Zychor Biologicals,specializing in Ortho, have been operating pan-India for 3 years. <i className='text-teal-800 not-italic'>We have recently partnered with top pharma companies like Natco Pharma, Akums, Heil Pharma, and Intas Pharma for manufacturing.
               </i>
            </div>
            <Link href={'/about'} className='flex justify-center'>
                <div className='flex gap-1 justify-center items-center mt-4 group'>
                    <div className="h-10 flex justify-center items-center text-xs cursor-pointer group-hover:bg-black group-hover:text-white duration-300 rounded-sm border-2 border-solid border-black text-black p-2">About us</div>
                    <div className="h-10 flex justify-center items-center cursor-pointer group-hover:bg-black group-hover:text-white duration-300 rounded-sm border-2 border-solid border-black text-black p-2"><MoveUpRight/></div>
                </div>
            </Link>
        </div>
    );
};

export default About;