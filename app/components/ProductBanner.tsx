"use client";
import React, { useEffect, useState, Suspense, useRef } from "react";
import { productCardData } from "@/app/constant";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ModelViewer from "./ModelViewer";

const ProductBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const holdIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto switch every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      nextProduct();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % productCardData.length);
  };

  const handleMouseDown = () => {
    // Start cycling while pressed
    if (!holdIntervalRef.current) {
      holdIntervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % productCardData.length);
      }, 1000);
    }
  };

  const handleMouseUp = () => {
    // Stop cycling but keep the current index
    if (holdIntervalRef.current) {
      clearInterval(holdIntervalRef.current);
      holdIntervalRef.current = null;
    }
  };

  const product = productCardData[currentIndex];

  return (
    <div className="w-[90%] md:w-[80%] mt-5 relative mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={product.num}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div className="flex flex-col md:flex-row bg-white rounded-sm p-8 md:h-72">
            
            {/* Left Section - CLICK / HOLD AREA */}
            <div
              className="flex flex-col justify-between pr-4 w-full md:w-1/2 cursor-pointer select-none"
              onClick={nextProduct}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <h3 className="text-sm text-gray-400 font-normal">Products</h3>
              <div className="flex flex-col gap-3">
                <h1 className="text-2xl text-black font-semibold">
                  {product.heading}
                </h1>
                <p className="text-sm text-gray-500 font-normal">
                  {product.desc}
                </p>
                <i className="not-italic text-blue-500">
                  {product.num} /{" "}
                  {productCardData.length.toString().padStart(2, "0")}
                </i>
              </div>
            </div>

            {/* Right Section - 3D Model */}
            <div className="hidden md:flex relative w-full md:w-1/2 justify-center items-center shadow-[inset_0_0_10px_rgba(1,1,1,0.2)] rounded-sm">
              <Canvas camera={{ position: [0, 1.5, 4], fov: 35 }}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <Suspense fallback={null}>
                  <ModelViewer url={product.modelUrl} />
                </Suspense>
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} />
              </Canvas>
            </div>

          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ProductBanner;
