import React from 'react';
import Image from 'next/image';
import { FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';
// nav bar
import MainNav from '@/components/Navbar';
import logoMain from "@/assets/logos/logo_main.jpg";

const Header = () => {
  return (
    <div className="bg-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 max-w-screen-lg">
        <div className="flex items-center">
            <Image
              title='Vignan High School'
              width={64}
              height={64}
              src={logoMain.src}
              alt="Vignan High School"
            />
          <div className="ml-4">
            <h1 className="text-xl font-medium text-red-800">Vignan High School</h1>
            {/* <p className="text-xs text-gray-500">Affiliated to Central Board of secondary education</p> */}
            <p className="text-xs text-gray-500">Jaggayyapet</p>
          </div>
        </div>
        <div className="hidden lg:flex items-center space-x-4 ml-auto">
          <div className="flex space-x-4">
            <a href="" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-red-800" size={24}/>
            </a>
            <a href="" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-red-800" size={24}/>
            </a>
            <a href="" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-red-800" size={24}/>
            </a>
          </div>
          <div className="text-red-800 font-bold">
            📞 0820 2561199, 2562400
          </div>
        </div>
      </div>
      <MainNav />
    </div>
  );
};

export default Header;
