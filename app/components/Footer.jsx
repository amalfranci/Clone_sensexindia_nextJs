import React from 'react';
import Image from 'next/image';
import logo from '../public/Social_icons/fb.png';
import Insta from '../public/Social_icons/insta.png';
import Likedin from '../public/Social_icons/linked.png';
import Twitt from '../public/Social_icons/x-twitter.png';

function Footer() {
  return (
    <footer className="mx-12 my-3 bg-white ">
      <div className="w-full p-2 mx-auto md:p-1 max-w-screen lg:flex lg:items-center lg:justify-between ">
      
        <div className="flex flex-col items-center justify-center space-y-2 text-center text-gray-500 sm:space-y-0 sm:flex-row sm:flex-wrap sm:space-x-1 lg:space-x-3 md:mb-4">
          <a href="#" className="text-blue-600 hover:text-gray-700">
            Most Searched:
          </a>
          <div className="flex flex-wrap justify-center space-x-1 sm:space-x-2 lg:space-x-3">
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
        </div>

  
        <ul className="flex flex-col items-center justify-center mt-3 space-y-3 text-center sm:space-y-0 sm:flex-row sm:space-x-4 lg:space-x-6 sm:mt-0">
          <span className="text-lg font-semibold lg:text-2xl">follow us</span>
          <div className="flex justify-center space-x-4 sm:flex-row">
            <li>
              <Image
                src={Likedin}
            
                alt="LinkedIn"
                className="w-8 lg:w-9"
              />
            </li>
            <li>
              <Image
                src={Insta}
              
                alt="Instagram"
                className="w-8 lg:w-9"
              />
            </li>
            <li>
              <Image
                src={logo}
           
                alt="Facebook"
                className="w-8 lg:w-9"
              />
            </li>
            <li>
              <Image
                src={Twitt}
             
                alt="Twitter"
                className="w-9 lg:w-10"
              />
            </li>
          </div>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
