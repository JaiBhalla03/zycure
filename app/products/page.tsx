"use client";
import React, { useRef } from "react";
import SmallHeading from "../components/utils/SmallHeading";
import { MoveUpRight } from "lucide-react";
import { productCardData } from "../constant";
import ProductCard from "./components/ProductCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Page = () => {
  const data = productCardData;

  // Ref for scrolling to first card
  const firstCardRef = useRef<HTMLDivElement | null>(null);

  const scrollToFirstCard = () => {
    if (firstCardRef.current) {
      firstCardRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Intersection observer for top section
  const { ref: topRef, inView: topInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="pt-14 md:pt-20 pb-5 md:pb-10 px-4 md:px-20">
      {/* Top Section Animated */}
      <motion.div
        ref={topRef}
        initial={{ opacity: 0, y: 40 }}
        animate={topInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <SmallHeading heading="PRODUCTS" />
        <motion.h1 
            initial={{ opacity: 0, x: 40 }}
            animate={topInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
            className="text-4xl md:text-6xl font-semibold">Our products</motion.h1>

        {/* Intro + Button */}
        <div className="w-full flex flex-col items-end py-2 md:py-10">
          <div className="w-full md:w-1/2 text-gray-500 text-xs md:text-sm">
            Delivering advanced therapies tailored to accelerate recovery,
            improve patient outcomes, and transform the treatment of chronic wounds,
            burns, and diabetic foot ulcers.
          </div>
          <div
            onClick={scrollToFirstCard}
            className="w-full md:w-1/2 flex gap-1 justify-center md:justify-start items-center group py-4 cursor-pointer"
          >
            <div className="h-10 flex justify-center items-center text-xs group-hover:bg-black group-hover:text-white duration-300 rounded-sm border-2 border-solid border-black text-black p-2">
              See our products
            </div>
            <div className="h-10 flex justify-center items-center group-hover:bg-black group-hover:text-white duration-300 rounded-sm border-2 border-solid border-black text-black p-2">
              <MoveUpRight />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Product Cards with animation */}
      <div>
        {data.map((item, index) => {
          // Intersection observer per card
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.2,
          });

          return (
            <motion.div
              key={index}
              ref={(el) => {
                if (index === 0) firstCardRef.current = el;
                ref(el);
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            >
              <ProductCard
                num={item.num}
                heading={item.heading}
                desc={item.desc}
                route={item.route}
                modelUrl={item.modelUrl}
                style={item.style}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
