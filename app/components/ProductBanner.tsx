"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import { productCardData } from "@/app/constant"; // adjust path
import { motion, AnimatePresence } from "framer-motion";

const ProductBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto switch every 1.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % productCardData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const product = productCardData[currentIndex];

  return (
    <div className="w-[90%] md:w-[80%] mt-5 relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={product.num} // key is required for AnimatePresence
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className={`absolute`}
        >
            <div className="flex flex-col md:flex-row bg-white inset-0 rounded-sm p-8">
                <div className="flex flex-col justify-between pr-4 w-full md:w-1/2">
                    <h3 className="text-sm text-gray-400 font-normal">Products</h3>
                    <div className="flex flex-col gap-3">
                    <h1 className="text-2xl text-black font-semibold">{product.heading}</h1>
                    <p className="text-sm text-gray-500 font-normal">{product.desc}</p>
                    <i className="not-italic text-blue-500">
                        {product.num} / {productCardData.length.toString().padStart(2, "0")}
                    </i>
                    </div>
                </div>

                {/* Right Section */}
                <div className="relative w-full md:w-1/2 flex justify-center items-center">
                    <Image
                    src={product.imageSrc}
                    alt={product.heading}
                    fill
                    className="rounded-sm object-cover"
                    />
                </div>
            </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ProductBanner;
