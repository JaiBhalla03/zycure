'use client';

import React, { useRef, useState } from 'react';
import SmallHeading from '../components/utils/SmallHeading';
import { BsFillSendFill } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';

const Page = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const notify = (message: string, success = true) => {
    toast[success ? 'success' : 'error'](message, {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: true,
      closeButton: false,
      className: 'custom-toast',
    });
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      const formData = {
        from_name: form.current.from_name.value.trim(),
        from_email: form.current.from_email.value.trim(),
        from_subject: form.current.from_subject.value.trim(),
        message: form.current.message.value.trim(),
      };

      if (!formData.from_name || !formData.from_email || !formData.from_subject || !formData.message) {
        notify('Please fill in all fields', false);
        return;
      }

      setIsSubmitting(true);

      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (res.ok) {
          form.current.reset();
          notify("Email sent successfully");
        } else {
          notify(data.error || "Failed to send email", false);
        }
      } catch (err) {
        console.error(err);
        notify("An unknown error occurred", false);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Animation variants
  const formVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="px-4 md:px-20 pt-16 md:pt-20 pb-5 md:pb-10">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <SmallHeading heading={'GET IN CONTACT'} />
        <motion.h1
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
          className="text-4xl md:text-6xl font-semibold pb-4 md:pb-0"
        >
          Contact Us
        </motion.h1>
      </motion.div>

      {/* Form */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        id="myForm"
        className="flex flex-col gap-4 md:p-8"
        variants={formVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div className="flex flex-col md:flex-row gap-4" variants={fieldVariants}>
          <input
            className="p-3 bg-gray-100 rounded-sm text-center w-full md:w-1/2 text-sm"
            type="text"
            name="from_name"
            placeholder="Your Name"
          />
          <input
            className="p-3 bg-gray-100 rounded-sm text-center w-full md:w-1/2 text-sm"
            type="email"
            name="from_email"
            placeholder="Your Email Address"
          />
        </motion.div>

        <motion.input
          className="p-3 bg-gray-100 rounded-sm text-center text-sm"
          type="text"
          name="from_subject"
          placeholder="Subject of your message"
          variants={fieldVariants}
        />

        <motion.textarea
          className="p-3 bg-gray-100 rounded-sm text-center text-sm"
          name="message"
          placeholder="Type your message....."
          variants={fieldVariants}
        />

        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="mx-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={fieldVariants}
        >
          <div className="flex gap-1 justify-center items-center group">
            <div className="h-10 flex justify-center items-center text-xs cursor-pointer bg-black text-white duration-300 rounded-sm py-2 px-4">
              {isSubmitting ? 'Sending...' : 'Post'}
            </div>
            <div className="h-10 w-10 flex justify-center items-center cursor-pointer bg-black text-white duration-300 rounded-sm">
              <BsFillSendFill />
            </div>
          </div>
        </motion.button>
      </motion.form>

      <ToastContainer />
    </div>
  );
};

export default Page;
