import React from "react";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import ProductBanner from "./ProductBanner";

const Hero = () => {
  return (
    <div className="relative w-full h-[120vh]">
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
        <h1 className="tracking-wider leading-tight text-3xl md:text-5xl text-teal-800 font-semibold text-center">
          Innovating Health for <br /> a Brighter Future
        </h1>

        {/* Contact Button */}
        <div className="flex items-center gap-1">
          <div className="rounded-sm text-white h-10 bg-teal-800 flex justify-center items-center px-6 text-sm font-thin cursor-pointer">
            Contact Us
          </div>
          <div className="rounded-sm text-white h-10 w-10 flex justify-center items-center bg-teal-800 cursor-pointer">
            <MoveUpRight />
          </div>
        </div>

        {/* Product Banner */}
        <ProductBanner />
      </div>
    </div>
  );
};

export default Hero;
