import { StaticImageData } from 'next/image';
import React from 'react';
import Image from 'next/image';
import { MoveUpRight } from 'lucide-react';

interface ProductCardProps{
    num: String;
    heading: String;
    desc: String;
    route: String;
    imageSrc: string | StaticImageData;
    style: String;
}

const ProductCard = ({num, heading, desc, route, imageSrc, style}: ProductCardProps) => {
    return (
        <div className={`flex flex-col md:flex-row ${style} px-4 py-5 md:py-10 rounded-sm my-4 md:my-10`}>
            <div className='w-full md:w-1/2 flex flex-col gap-4 pb-4 md:p-4'>
                <div className='text-xs text-gray-500'>
                    <i className='not-italic text-4xl font-semibold text-purple-800'>{num}</i> / <i className='not-italic'>05</i>
                </div>
                <h1 className='text-3xl font-semibold'>{heading}</h1>
                <p className='text-xs'>{desc}</p>
                <div className='flex gap-1 items-center group'>
                    <div className="h-10 flex justify-center items-center text-xs cursor-pointer duration-300 rounded-sm text-white bg-black p-2">Learn More</div>
                    <div className="h-10 flex justify-center items-center cursor-pointer duration-300 rounded-sm text-white bg-black p-2"><MoveUpRight/></div>
                </div>
            </div>
            <div className='relative w-full md:w-1/2 h-64'>
                <Image
                    src={imageSrc}
                    alt={''}
                    fill
                    className='object-cover rounded-sm'
                />
            </div>
        </div>
    );
};

export default ProductCard;