import { MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Authenticity = () => {
    return (
        <div className='relative px-20 py-10'>
            <div className="h-96 w-full relative group">
                <Image 
                    src="/authenticity.jpg" 
                    alt="authenticity"
                    fill
                    className="object-cover rounded-sm"
                />
                <div className='p-10 flex justify-between items-end text-white absolute top-0 left-0 rounded-sm h-full w-full'>
                    <p className="text-4xl font-semibold">We prioritize authenticity to ensure our customers receive only the highest quality products.</p>
                    <div className='flex gap-1 justify-center items-center'>
                            <div className="h-10 w-24 flex justify-center items-center text-xs cursor-pointer duration-300 rounded-sm text-black p-2 bg-white">More Info</div>
                            <div className="h-10 flex justify-center items-center text-xs cursor-pointer duration-300 rounded-sm text-black p-2 bg-white"><MoveUpRight/></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Authenticity;