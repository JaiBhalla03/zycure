'use client';
import React from "react";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import ProductBanner from "./ProductBanner";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // animate only once
    threshold: 0.2, // triggers when 20% of element is visible
  });

  const fadeUp = (delay: number): Variants => ({
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay, ease: "easeOut" },
    },
  });

  return (
    <div ref={ref} className="relative w-full h-[120vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/heroImage.jpg"
        alt="DNA Molecule Background"
        fill
        className="object-cover"
        priority
      />

      {/* Center Content */}
      <div className="w-full absolute flex flex-col items-center gap-4 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-14">
        {/* Heading */}
        <motion.h1
          variants={fadeUp(0.2)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="tracking-wider leading-tight text-3xl md:text-5xl text-teal-800 font-semibold text-center"
        >
          Innovating Health for <br /> a Brighter Future
        </motion.h1>

        {/* Contact Button */}
        <motion.div
          variants={fadeUp(0.5)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex items-center gap-1"
        >
          <Link href="/contact">
            <div className="rounded-sm text-white h-10 bg-teal-800 flex justify-center items-center px-6 text-sm font-thin cursor-pointer">
              Contact Us
            </div>
          </Link>
          <Link href="/contact">
            <div className="rounded-sm text-white h-10 w-10 flex justify-center items-center bg-teal-800 cursor-pointer">
              <MoveUpRight />
            </div>
          </Link>
        </motion.div>
        <ProductBanner />
      </div>
    </div>
  );
};

export default Hero;
