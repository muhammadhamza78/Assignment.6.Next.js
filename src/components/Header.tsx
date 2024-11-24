import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="h-[60px] hidden lg:flex justify-between px-8 py-5 gap-10 lg:px-12">
      <div className="text-base flex gap-10 flex-wrap w-full sm:w-auto text-center lg:text-left">
        <p>
          Phone Number: <span className="font-semibold">956 742 455 678</span>
        </p>
        <p>
          Email: <span className="font-semibold">info@ddsgnr.com</span>
        </p>
      </div>

      <div className="flex gap-8 lg:gap-10 items-center justify-center lg:justify-end">
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebook size={24} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram size={24} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter size={24} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  );
};

export default Header;
