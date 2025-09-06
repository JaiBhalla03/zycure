import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-black py-4 text-white">
      <h1 className="text-center text-gray-600/50 font-extrabold text-6xl md:text-8xl tracking-wider whitespace-nowrap overflow-hidden">
        zycure Biotech
      </h1>

      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0 px-4 md:px-20 items-center mt-4 md:mt-10 md:h-32">
        {/* Logo + Copyright */}
        <div className="flex flex-col h-full justify-between">
          <Link href="/" className="mx-auto md:mx-0">
            <Image src="/logo.png" alt="Zycure Logo" width={60} height={20} />
          </Link>
          <i className="not-italic text-xs text-gray-300">© 2025-Present</i>
        </div>

        {/* Menu */}
        <div>
          <h1 className="text-center md:text-start text-xs font-light text-gray-300">
            Menu
          </h1>
          <ul className="text-sm flex flex-col gap-1">
            <li className="text-center md:text-start">
              <Link href="/">Home</Link>
            </li>
            <li className="text-center md:text-start">
              <Link href="/about">About Us</Link>
            </li>
            <li className="text-center md:text-start">
              <Link href="/products">Products</Link>
            </li>
            <li className="text-center md:text-start">
              <Link href="/careers">Careers</Link>
            </li>
            <li className="text-center md:text-start">
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h1 className="text-center md:text-start text-xs font-light text-gray-300">
            Contact Us
          </h1>
          <a
            href="mailto:zycurebiotech@gmail.com"
            className="text-center md:text-start text-sm hover:underline"
          >
            zycurebiotech@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
