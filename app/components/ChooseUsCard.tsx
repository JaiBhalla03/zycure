import React from 'react';

interface ChooseUsCardProps {
    index: String;
    heading: String;
    desc: String;
    color: String;
    height: String;
}

const ChooseUsCard = ({index, heading, desc, color, height}: ChooseUsCardProps) => {
    return (
        <div className={`rounded-sm ${color} p-2 ${height}`}>
            <div className='flex flex-col justify-between h-full'>
                <i className='not-italic text-xs flex justify-end'>{index}</i>
                <div className='flex flex-col justify-between items-center h-full'>
                    <h1 className='text-md font-normal text-center'>{heading}</h1>
                    <p className='text-xs font-light text-center text-gray-500'>{desc}</p>
                </div>
            </div>
        </div>
    );
};

export default ChooseUsCard;