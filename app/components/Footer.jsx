import React from 'react';
import Image from 'next/image';
import logo from '../public/Social_icons/fb.png';
import Insta from '../public/Social_icons/insta.png';
import Likedin from '../public/Social_icons/linked.png';
import Twitt from '../public/Social_icons/x-twitter.png';

function Footer() {
  return (
    <footer className="m-4 bg-white">
      <div className="w-full p-2 mx-auto max-w-screen md:flex md:items-center md:justify-between">
        <div className="flex flex-wrap items-center justify-center space-x-1 text-gray-500 lg:space-x-3">
          <a href="#" className="text-blue-600 hover:text-gray-700">
            Most Searched:
          </a>
          <a href="#" className="hover:text-gray-700">
            Compounding
          </a>
          <span>|</span>
          <a href="#" className="hover:text-gray-700">
            Buffett Indicator
          </a>
          <span>|</span>
          <a href="#" className="hover:text-gray-700">
            IPO
          </a>
          <span>|</span>
          <a href="#" className="hover:text-gray-700">
            Calculators
          </a>
        </div>
        <ul className="flex flex-wrap items-center mt-3 font-medium text-md dark:text-gray-400 sm:mt-0">
          <span className="text-lg lg:text-2xl me-4 md:me-6">Follow us</span>
          <li>
            <Image
              src={Likedin}
              width={35} 
         
              alt="LinkedIn"
              className="me-4 md:me-6 sm:w-10 "
            />
          </li>
          <li>
            <Image
              src={Insta}
              width={35} 
           
              alt="Instagram"
              className="me-4 md:me-6 sm:w-10 "
            />
          </li>
          <li>
            <Image
              src={logo}
              width={35} 
              
              alt="Facebook"
              className="me-4 md:me-6 sm:w-10 "
            />
          </li>
          <li>
            <Image
              src={Twitt}
              width={35} 
              
              alt="Twitter"
              className="me-4 md:me-6 sm:w-10 "
            />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
