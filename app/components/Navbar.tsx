"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; 
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Add background when scrolled
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-20 transition-all duration-500 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      } ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between transition-all duration-300">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Zycure Logo"
            width={45}
            height={15}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium tracking-wide text-xs">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About Us</Link>
          <Link href="/products" className="hover:underline">Products</Link>
          <Link href="/careers" className="hover:underline">Careers</Link>
          <Link href="/contact" className="hover:underline">Contact Us</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="h-screen md:hidden bg-white shadow-md transition-all duration-500">
          <div className="h-screen flex flex-col items-center py-4 text-gray-700 font-medium text-lg">
            <Link href="/" onClick={() => setIsOpen(false)} className="w-full text-center py-10">Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="w-full text-center py-10">About Us</Link>
            <Link href="/products" onClick={() => setIsOpen(false)} className="w-full text-center py-10">Products</Link>
            <Link href="/careers" onClick={() => setIsOpen(false)} className="w-full text-center py-10">Careers</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="w-full text-center py-10">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
