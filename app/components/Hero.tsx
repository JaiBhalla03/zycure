import React from 'react';
import Image from "next/image";
import { MoveUpRight } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative w-full h-[120vh]">
              <Image
                src="/heroImage.jpg"
                alt="DNA Molecule Background"
                fill
                className="object-cover"
                priority
              />
              <div className='w-full absolute flex flex-col items-center gap-4 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-14'>
                <h1 className='tracking-wider leading-tight text-5xl text-teal-800 font-semibold'>
                  Innovating Health for<br/> a Brighter Future
                </h1>
                <div className='flex items-center gap-1'>
                    <div className='rounded-sm text-white h-10 bg-teal-800 flex justify-center items-center p-4 text-sm font-thin'>Contact Us</div>
                    <div className='rounded-sm text-white h-10 w-10 flex justify-center items-center bg-teal-800'><MoveUpRight /></div>
                </div>
                <div className='bg-white rounded-sm p-4 w-[80%] flex mt-5'>
                    <div className='flex flex-col justify-between pr-4'>
                        <h3 className='text-sm text-gray-400 font-normal'>Products</h3>
                        <div className='flex flex-col gap-3'>
                            <h1 className='text-2xl text-black font-semibold'>Injectables 1 ml</h1>
                            <p className='text-sm text-gray-400 font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                            <i className='not-italic text-blue-500'>01 / 04</i>
                        </div>
                    </div>
                    <div className='relative'>
                        <Image src="/productSample.jpeg" alt='' width={500} height={400} className='rounded-sm'/>
                        <div className='bg-white absolute left-4 bottom-4 rounded-sm text-black font-thin p-3'>
                            <MoveUpRight/>
                        </div>
                    </div>
                </div>
              </div>
        </div>
    );
};

export default Hero;