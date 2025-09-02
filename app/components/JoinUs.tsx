import { MoveUpRight } from 'lucide-react';
import React from 'react';

const JoinUs = () => {
    return (
        <div className='py-10 px-20 flex flex-col items-center'>
            <h1 className='text-6xl text-black font-extrabold'>Join Us</h1>
            <p className='w-96 text-sm text-gray-500 font-extralight text-center'>Explore our website learn more about our mission and products. Welcome to a healthier future with Zycure Biologicals!</p>
            <div className='flex gap-1 justify-center mx-auto items-center mt-4 group'>
                <div className="h-10 flex justify-center items-center text-xs cursor-pointer group-hover:bg-black group-hover:text-white duration-300 rounded-sm border-2 border-solid border-black text-black p-2">Contact us</div>
                <div className="h-10 flex justify-center items-center cursor-pointer group-hover:bg-black group-hover:text-white duration-300 rounded-sm border-2 border-solid border-black text-black p-2"><MoveUpRight/></div>
            </div>
        </div>
    );
};

export default JoinUs;