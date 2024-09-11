import Image from "next/image";
import logo from '../app/public/logo.png';

export default function Home() {
  return (
    <div className="relative h-[80vh] lg:h-screen bg-[#C8CACC]  hover:bg-white">
      <div className="flex flex-col items-center justify-center  h-[90vh] lg:h-screen px-4 py-16">
        <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-4">
          <div className="flex items-center space-x-2">
            <Image
              src={logo}
              alt="Logo"
              width={65}
            />
            <h1 className="text-xl font-bold text-gray-800 sm:text-2xl md:text-3xl">
              SENSEXINDIA<span className="text-blue-500">.IN</span>
              <p className="text-base font-normal text-gray-500 sm:text-lg md:text-xl">
                The Road To Wealth.
              </p>
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
            <div className="absolute inset-y-0 right-0 flex items-center text-blue-500">
              <button className="px-3 py-2 bg-white rounded-full">
                All
                <i className="ml-2 text-blue-500 fa fa-angle-down"></i>
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
