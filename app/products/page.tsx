'use client'
import React from 'react';
import SmallHeading from '../components/utils/SmallHeading';
import { MoveUpRight } from 'lucide-react';
import { productCardData } from '../constant';
import ProductCard from './components/ProductCard';

const page = () => {
    const data = productCardData;
    return (
        <div className='pt-20 pb-10 px-20'>
            <SmallHeading heading='PRODUCTS'/>
            <h1 className='text-6xl font-semibold'>Our products</h1>
            <div className='w-full flex flex-col items-end py-10'>
                <div className='w-1/2 text-gray-500 text-sm'> 
                    Delivering advanced therapies tailored to accelerate recovery, 
                    improve patient outcomes, and transform the treatment of chronic wounds, 
                    burns, and diabetic foot ulcers.
                </div>
                <div className='w-1/2 flex gap-1 justify-start items-center group py-4'>
                    <div className="h-10 flex justify-center items-center text-xs cursor-pointer group-hover:bg-black group-hover:text-white duration-300 rounded-sm border-2 border-solid border-black text-black p-2">See our products</div>
                    <div className="h-10 flex justify-center items-center cursor-pointer group-hover:bg-black group-hover:text-white duration-300 rounded-sm border-2 border-solid border-black text-black p-2"><MoveUpRight/></div>
                </div>
            </div>
            <div>
                {
                    data.map((item, index) => (
                        <ProductCard
                            key = {index}
                            num = {item.num}
                            heading = {item.heading}
                            desc = {item.desc}
                            route = {item.route}
                            imageSrc = {item.imageSrc}
                            style = {item.style}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default page;