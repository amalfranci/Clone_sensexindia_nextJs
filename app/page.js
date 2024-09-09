import Image from "next/image";
import logo from '../app/public/logo.png';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#C8CACC] hover:bg-white">
   
      <div className="flex flex-col items-center justify-center h-screen py-16 ">
     
        <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-4">
          <div className="flex items-center space-x-2">
            <Image
              src={logo}
              alt="Logo"
              className="w-12 h-12 md:w-16 md:h-16" 
            />
            <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
              SENSEXINDIA<span className="text-blue-500">.IN</span>
              <p className=" font-normal text-gray-500 text-[17px] md:mt-0">The Road To Wealth.</p>
            </h1>
            
          </div>
          
        </div>

      
        <div className="flex items-center justify-center w-full max-w-lg mx-auto mt-8">
          <div className="relative w-full">
            <input
              type="text"
              className="w-full p-3 pl-20 border border-gray-300 rounded-full shadow-lg focus:outline-none"
              placeholder="Search For"
            />
            <i className="absolute text-gray-400 transform -translate-y-1/2 left-6 top-1/2 fa fa-search"></i>
            <div className="absolute inset-y-0 right-0 flex items-center text-blue-500 ">
              <button className="px-3 py-2 bg-white rounded-full ">
                All
                <i className="text-blue-500 ml-14 fa fa-angle-down"></i>
              </button>
            </div>
          </div>
        </div>

       
        <nav className="flex flex-wrap items-center justify-center mt-6 space-x-4 text-sm text-gray-500">
          <a href="#" className="hover:text-gray-700">
            Sovereign Gold Bond
          </a>
          <span>|</span>
          <a href="#" className="hover:text-gray-700">
            Calculators
          </a>
          <span>|</span>
          <a href="#" className="hover:text-gray-700">
            Bonds
          </a>
          <span>|</span>
          <a href="#" className="hover:text-gray-700">
            Mutual-Fund
          </a>
        </nav>
      </div>

    
    </div>
  );
}
