"use client";

import React, { useState, useEffect, useRef } from "react";
import Stock from "../menuData/Stock";
import Models from "../menuData/Models";
import Calculators from "../menuData/Calculators";
import { Infection } from "../menuData/InfectionIndia";
import { IPO } from "../menuData/Ipo";
import { Gdp } from "../menuData/Gdp";
import { Bonds } from "../menuData/Bonds";
import { Compounding } from "../menuData/Compounding";
import { Cagr } from "../menuData/Cagr";
import { Market } from "../menuData/Market";
import { IncomeTax } from "../menuData/IncomeTax";

function Navbar() {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  const menuData = [
    { name: "Stock", content: Stock },
    { name: "Models", content: Models },
    { name: "Calculators", content: Calculators },
  ];

  const NormalMenuData = [
    { name: "Infection", content: Infection },
    { name: "IPO", content: IPO },
    { name: "GDP", content: Gdp },
    { name: "Bonds", content: Bonds },
    { name: "Compounding", content: Compounding },
    { name: "CAGR", content: Cagr },
    { name: "Market", content: Market },
    { name: "Income Tax", content: IncomeTax },
  ];

  const complexDropdownItems = menuData.map((item) => item.name);
  const normalDropdownItems = NormalMenuData.map((item) => item.name);

  const toggleCountryDropdown = () => {
    setIsCountryDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCountryDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsCountryDropdownOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <main className="bg-[#F2F4F7] text-lg text-[#393c41] font-semibold pt-14 pl-[50px] pr-[10px]">
        <ul className="flex flex-wrap items-center space-x-4 pb-11 ">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative"
              onMouseOver={() => handleMouseOver(index)}
              onMouseLeave={handleMouseLeave}
            >
              <span className="flex items-center cursor-pointer">
                {item}
                <i
                  className="items-center ml-1 text-sm cursor-pointer fa fa-angle-down"
                  aria-hidden="true"
                ></i>
              </span>

              {openIndex === index && (
                <div className="absolute mt-2 w-[700px] bg-white text-black top-full p-1 rounded-lg shadow-lg overflow-hidden z-10">
                  <hr className="w-full h-0.5 bg-blue-400 border-0 rounded "></hr>

                  {complexDropdownItems.includes(item) ? (
                    menuData
                      .filter((menu) => menu.name === item)
                      .map((menu, menuIndex) => (
                        <div
                          key={menuIndex}
                          className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3"
                        >
                          {menu.content.map((section, sectionIndex) => (
                            <div key={sectionIndex} className="w-full">
                              <h4 className="mb-2 underline underline-offset-8">
                                {section.title}
                              </h4>
                              <ul>
                                {section.links.map((link, linkIndex) => (
                                  <li
                                    key={linkIndex}
                                    className="flex items-center mb-2 text-sm font-normal"
                                  >
                                    <i
                                      className={`${link.icon} mr-2 text-blue-600 `}
                                    ></i>
                                    <a className="ml-2 cursor-pointer hover:text-blue-500 ">{link.name}</a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ))
                  ) : normalDropdownItems.includes(item) ? (
                    NormalMenuData.filter((menu) => menu.name === item).map(
                      (menu, menuIndex) => (
                        <div
                          key={menuIndex}
                          className="grid grid-cols-1 gap-4 p-4 text-sm md:grid-cols-1"
                        >
                          <ul>
                            {menu.content.map((link, linkIndex) => (
                              <li
                                key={linkIndex}
                                className="flex items-center mb-2"
                              >
                                <i className={`${link.icon} mr-2 text-blue-600`}></i>
                                <a className="ml-2 cursor-pointer hover:text-blue-500">{link.name}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    )
                  ) : ""}
                </div>
              )}
            </li>
          ))}

          <div ref={dropdownRef} className="relative mx-auto font-sans w-max">
            <button
              type="button"
              onClick={toggleCountryDropdown}
              className="py-1 pr-2 pl-1 rounded text-[#333] text-sm font-semibold border-2  outline-none hover:bg-blue-50 flex items-center"
            >
              <img
                src={`https://readymadeui.com/${selectedCountry.toLowerCase()}_flag.webp`}
                alt={selectedCountry}
                className="w-5 mr-1"
              />
              {selectedCountry}
              <i className="ml-12 text-blue-500 fa fa-angle-down"></i>
            </button>

            {isCountryDropdownOpen && (
              <ul className="absolute shadow-lg bg-white py-2 px-2 z-[1000] min-w-full w-max rounded max-h-96 overflow-auto">
                {["USA", "UK", "India", "Singapore"].map((country) => (
                  <li
                    key={country}
                    onClick={() => handleCountrySelect(country)}
                    className="py-2.5 px-4 hover:bg-blue-50 rounded text-black text-sm cursor-pointer"
                  >
                    <div className="flex items-center">
                      <img
                        src={`https://readymadeui.com/${country.toLowerCase()}_flag.webp`}
                        className="w-6 mr-3"
                        alt={country}
                      />
                      {country}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </ul>
      </main>
    </div>
  );
}

export default Navbar;
