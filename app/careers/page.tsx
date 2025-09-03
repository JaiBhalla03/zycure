'use client';
import React, { useState } from 'react';
import SmallHeading from '../components/utils/SmallHeading';

const page = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
        resume: null as File | null
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData({ ...formData, resume: e.target.files[0] });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const data = new FormData();
        data.append('name', formData.name);
        data.append('phone', formData.phone);
        data.append('email', formData.email);
        data.append('message', formData.message);
        if (formData.resume) data.append('resume', formData.resume);

        const response = await fetch('https://formspree.io/f/meollwdp', {
            method: 'POST',
            body: data
        });

        if (response.ok) {
            alert('Application submitted successfully!');
            setFormData({ name: '', phone: '', email: '', message: '', resume: null });
        } else {
            alert('Something went wrong. Please try again.');
        }
    };

    return (
        <div className='px-6 md:px-20 pt-20 pb-10'>
            <SmallHeading heading={'JOIN OUR MISSION'} />
            <h1 className='text-4xl md:text-6xl font-semibold'>Careers</h1>

            <div className='flex flex-col md:flex-row justify-between py-10 gap-6'>
                <p className='text-sm md:text-base md:w-1/2 text-gray-500'>
                    At Zycure, we believe in transforming healthcare through innovation, quality, and care. Our work is driven by a passion for improving patient outcomes and creating solutions that make a meaningful difference in people’s lives. 
                    We are looking for curious minds, problem solvers, and driven professionals who want to be part of a dynamic and forward-thinking organization.
                </p>

                <form 
                    onSubmit={handleSubmit} 
                    className='flex flex-col gap-4 w-full md:w-1/2 bg-gray-50 p-6 rounded-lg shadow-md'
                    encType="multipart/form-data"
                >
                    <input
                        type='text'
                        name='name'
                        placeholder='Full Name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className='p-3 rounded border border-gray-300'
                    />
                    <input
                        type='tel'
                        name='phone'
                        placeholder='Phone Number'
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className='p-3 rounded border border-gray-300'
                    />
                    <input
                        type='email'
                        name='email'
                        placeholder='Email Address'
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className='p-3 rounded border border-gray-300'
                    />
                    <input
                        type='file'
                        name='resume'
                        onChange={handleFileChange}
                        accept='.pdf,.doc,.docx'
                        className='p-2'
                    />
                    <textarea
                        name='message'
                        placeholder='Message'
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className='p-3 rounded border border-gray-300'
                    />
                    <button
                        type='submit'
                        className='bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition-colors'
                    >
                        Submit Application
                    </button>
                </form>
            </div>
        </div>
    );
};

export default page;
