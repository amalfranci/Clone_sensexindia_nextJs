"use client";

import React, { useState } from "react";

function Navbar() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleMouseOver = (index) => setOpenIndex(index);
  const handleMouseLeave = () => setOpenIndex(null);

  const menuItems = [
    "Stock",
    "Infection",
    "IPO",
    "GDP",
    "Models",
    "Calculators",
    "Bonds",
    "Compounding",
    "CAGR",
    "Market",
    "Income Tax",
  ];

  return (
    <div className="relative">
      <main className="bg-[#F2F4F7] text-lg text-[#393c41] shadow-md font-semibold pt-14 pl-[50px] pr-[10px]">
        <ul className="flex items-center space-x-4 pb-11">
          {menuItems.map((item, index) => (
            <li key={index} className="relative">
              <span
                className="flex items-center cursor-pointer"
                onMouseOver={() => handleMouseOver(index)}
                onMouseLeave={handleMouseLeave}
              >
                {item}
                <i
                  className="items-center ml-1 text-sm cursor-pointer fa fa-angle-down"
                  aria-hidden="true"
                ></i>
              </span>
              {openIndex === index && (
                <div className="absolute mt-2 text-center text-black bg-white top-full">
                  <div className="">
                    {/*  this is for Indices SECTION */}
                    <div className="">
                      <h4 className="">Indices</h4>
                      <ul className="">
                        <li className="">
                          <i>icon here</i>
                          <a className="">Nifty 50 Returns</a>
                        </li>
                        <li className="">
                          <i>icon here</i>
                          <a className="">Nifty 50 Returns</a>
                        </li>
                        <li className="">
                          <i>icon here</i>
                          <a className="">Nifty 50 Returns</a>
                        </li>
                      </ul>
                    </div>
                      {/*  this is for Indices SECTION end */}

                        {/*  this is for Ets SECTION  */}

                      <div className="">
                      <h4 className="">Indices</h4>
                      <ul className="">
                        <li className="">
                          <i>icon here</i>
                          <a className="">Nifty 50 Returns</a>
                        </li>
                        <li className="">
                          <i>icon here</i>
                          <a className="">Nifty 50 Returns</a>
                        </li>
                        <li className="">
                          <i>icon here</i>
                          <a className="">Nifty 50 Returns</a>
                        </li>
                      </ul>
                    </div>

                      {/*  this is for Ets SECTION end */}
                 



                      
                    
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default Navbar;
