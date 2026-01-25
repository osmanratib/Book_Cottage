import React from 'react';
import { FaGlobe, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
 return (
  <footer className="bg-[#1d1e1e] text-gray-300">
   <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
    <div>
     <h1 className="text-2xl font-bold font-right text-white mb-4">
      Cottage Arena
     </h1>
     <p className="text-sm text-gray-400 font-IBM">
      make your journey more beautiful by Cottage Arena
     </p>
    </div>

    <div>
     <h2 className="text-white font-semibold mb-4">Company</h2>
     <ul className="space-y-2 text-sm">
      <li className="hover:text-white cursor-pointer">About</li>
      <li className="hover:text-white cursor-pointer">Careers</li>
      <li className="hover:text-white cursor-pointer">Blog</li>
     </ul>
    </div>

    <div>
     <h2 className="text-white font-semibold mb-4">Resources</h2>
     <ul className="space-y-2 text-sm">
      <li className="hover:text-white cursor-pointer">Docs</li>
      <li className="hover:text-white cursor-pointer">Support</li>
      <li className="hover:text-white cursor-pointer">Privacy Policy</li>
     </ul>
    </div>

    <div>
     <h2 className="text-white font-semibold mb-4">Follow Us</h2>
     <div className="flex space-x-4">
      <a className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition cursor-pointer">
       <FaGlobe className="text-white" />
      </a>
      <a className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition cursor-pointer">
       <FaTwitter className="text-white" />
      </a>
      <a className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition cursor-pointer">
       <FaInstagram className="text-white" />
      </a>
     </div>
    </div>
   </div>

   <div className="border-t border-gray-700 py-6 text-center text-sm text-gray-500">
    © {new Date().getFullYear()} <span className='font-right' >cottage Arena</span>. All rights reserved.
   </div>
  </footer>
 );
};

export default Footer;
