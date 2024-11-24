"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button"



const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-[#F7F7F7] shadow-md">
      <div className="flex items-center justify-between px-2 py-4 md:px-6">

        <div className="flex items-center gap-1">
          <div className="w-[110px] pb-5 pt-5 ">
            <Image src="/logo.svg" alt="Logo" width={200} height={100} />
          </div>
        </div>

   
        <button
          className="block md:hidden text-gray-600"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

      
        <div className="hidden md:flex items-center justify-center w-full gap-8">
          <ul className="flex gap-8 text-[22px]">
            {["Home", "Courses", "Services", "Achievement", "About Us", "Testimonial"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-gray-700">
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-8 ml-6">
          <Button variant="outline" className="px-5 py-5 border border-gray-900 text-gray-800 rounded hover:bg-gray-500">Log In</Button>
            <Button variant="outline" className="px-5 py-5 bg-black text-white rounded hover:bg-gray-500">Sign Up</Button>
          </div>
        </div>
      </div>


      {isMobileMenuOpen && (
        <nav className="absolute top-[72px] left-0 w-full bg-[#F7F7F7] shadow-lg z-50">
          <ul className="flex flex-col items-start p-4 gap-4">
            <div className="w-full border-b pb-4">
              <p className="text-sm">
                Phone Number: <span className="font-semibold">956 742 455 678</span>
              </p>
              <p className="text-sm mt-2">
                Email: <span className="font-semibold">info@ddsgnr.com</span>
              </p>
              <div className="flex gap-4 mt-4">
                {[FaFacebook, FaInstagram, FaTwitter, FaLinkedin].map((Icon, idx) => (
                  <a key={idx} href="#" target="_blank" rel="noopener noreferrer" aria-label="Social Media">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {["Home", "Courses", "Services", "Achievement", "About Us", "Testimonial"].map((item) => (
              <li key={item}>
                <a href="#" className="block py-2 hover:text-gray-700">
                  {item}
                </a>
              </li>
            ))}

            <div className="w-full flex flex-col gap-4 mt-4">
              <button className="w-full px-5 py-3 border border-gray-400 text-gray-600 rounded hover:bg-gray-200">
                Login
              </button>
              <button className="w-full px-5 py-3 bg-black text-white rounded hover:bg-gray-800">
                Sign Up
              </button>
            </div>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;





