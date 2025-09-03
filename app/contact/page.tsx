'use client';

import React, { useRef, useState } from 'react';
import SmallHeading from '../components/utils/SmallHeading';
import { BsFillSendFill } from 'react-icons/bs';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {
    const form = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false); // Add state for form submission

    const notify = (message: string , success = true) => {
        toast[success ? 'success' : 'error'](message, {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: true,
            closeButton: false,
            className: 'custom-toast',
        });
    }

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            const name = form.current.from_name.value.trim();
            const email = form.current.from_email.value.trim();
            const subject = form.current.from_subject.value.trim();
            const message = form.current.message.value.trim();

            if (!name || !email || !subject || !message) {
                notify('Please fill in all fields', false);
                return;
            }

            setIsSubmitting(true);

            try {
                const result = await emailjs.sendForm(
                    'service_w5gxg7k',
                    'template_9g7wwx1',
                    form.current,
                    'L_SO4vLTln1gilDdT'
                );
                console.log(result.text);
                console.log('message sent');
                form.current.reset();
                notify('Email sent successfully');
            } catch (error) {
                if (error instanceof Error) {
                    console.log(error.message);
                    notify('Failed to send email', false);
                } else {
                    console.log(error);
                    notify('An unknown error occurred', false);
                }
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <div className='px-4 md:px-20 pt-16 md:pt-20 pb-5 md:pb-10'>
           <SmallHeading heading={'GET IN CONTACT'}/>
           <h1 className='text-4xl md:text-6xl font-semibold pb-4 md:pb-0'>Contact Us</h1>
           <form ref={form} onSubmit={sendEmail} id={'myForm'} className={'flex flex-col gap-4 md:p-8'}>
                            <div className={'flex flex-col md:flex-row gap-4'}>
                                <input
                                    className={'p-3 bg-gray-100 rounded-sm text-center w-full md:w-1/2 text-sm'}
                                    type={'text'}
                                    name={'from_name'}
                                    placeholder={'Your Name'}
                                    />
                                <input
                                    className={'p-3 bg-gray-100 rounded-sm text-center w-full md:w-1/2 text-sm'}
                                    type={'email'}
                                    name={'from_email'}
                                    placeholder={'Your Email Address'}
                                />
                            </div>
                            <input
                                className={'p-3 bg-gray-100 rounded-sm text-center text-sm'}
                                type={'text'}
                                name={'from_subject'}
                                placeholder={'Subject of your message'}
                               />
                            <textarea
                                className={'p-3 bg-gray-100 rounded-sm text-center text-sm'}
                                name={'message'}
                                placeholder={'Type your message.....'}
                            />
                            <button
                                className={''}
                            >
                                <div className='flex gap-1 justify-center mx-auto items-center group'>
                                    <div className="h-10 flex justify-center items-center text-xs cursor-pointer bg-black text-white duration-300 rounded-sm py-2 px-4">Post</div>
                                    <div className="h-10 w-10 flex justify-center items-center cursor-pointer bg-black text-white duration-300 rounded-sm"><BsFillSendFill/></div>
                                </div> 
                            </button>
                        </form>
                        <ToastContainer/>
        </div>
    );
};

export default page;