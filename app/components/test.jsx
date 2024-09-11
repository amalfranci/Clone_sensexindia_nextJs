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

import Image from "next/image";

function Navbar() {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState({});
  const dropdownRef = useRef(null);
  let mouseLeaveTimeout;

  const handleMouseOver = (index) => {
    if (mouseLeaveTimeout) clearTimeout(mouseLeaveTimeout);
    setOpenIndex(index);
  };

  const handleMouseLeave = () => {
    mouseLeaveTimeout = setTimeout(() => {
      setOpenIndex(null);
    }, 200);
  };

  const toggleSubMenu = (index) => {
    setIsSubMenuOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
    setOpenSubMenuIndex(index);
  };

  const handleBackNavigation = () => {
    setIsSubMenuOpen(false);
    setOpenSubMenuIndex(null);
  };

  const toggleCountryDropdown = () => {
    setIsCountryDropdownOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    setIsSubMenuOpen(false);
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsCountryDropdownOpen(false);
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
    <div className="fixed top-0 left-0 z-50 w-full bg-white shadow-md ">
      <main className="bg-[#f7f6f2] font-inherit text-inherit font-medium leading-inherit text-[#0C0F13] capitalize pt-12 pl-[50px] pr-[10px] h-[60px] lg:h-full xl:h-full 2xl:h-full">
        {/* Desktop Menu */}
        <ul className="flex-wrap items-center hidden space-x-4 lg:flex pb-11">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative"
              onMouseOver={() => handleMouseOver(index)}
              onMouseLeave={handleMouseLeave}
            >
              <span className="flex items-center cursor-pointer">
                {item}
                <i className="items-center ml-1 text-sm cursor-pointer fa fa-angle-down"></i>
              </span>

              {/* Dropdown Content */}
              {openIndex === index && (
                <div className="absolute mt-2 w-[700px] bg-white text-black top-full p-1 rounded-lg shadow-lg overflow-hidden z-10">
                  <hr className="w-full h-0.5 bg-blue-400 border-0 rounded"></hr>
                  {/* Add dropdown content here */}
                </div>
              )}
            </li>
          ))}

          {/* Country Dropdown for Desktop */}
          <div ref={dropdownRef} className="relative mx-auto font-sans w-max">
            <button
              type="button"
              onClick={toggleCountryDropdown}
              className="py-1 pr-2 pl-1 rounded text-[#333] text-sm font-semibold border-2 outline-none hover:bg-blue-50 flex items-center"
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

        {/* Mobile Menu */}
        <div className="absolute right-0 pr-4 mb-8 top-3 lg:hidden">
          <button onClick={toggleMobileMenu} className="text-2xl " aria-label="Toggle menu">
            {isMobileMenuOpen ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute top-0 left-0 w-5/6 h-screen p-4 overflow-x-hidden bg-white shadow-lg lg:hidden">
            <ul className="space-y-4">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <div className="flex items-center justify-between">
                    <a className="cursor-pointer " onClick={() => toggleSubMenu(index)}>{item}</a>
                    <i
                      className={`ml-2 cursor-pointer fa fa-angle-down ${
                        openSubMenuIndex === index ? "fa-angle-up" : ""
                      }`}
                      onClick={() => toggleSubMenu(index)}
                    ></i>
                  </div>
                </li>
              ))}

              {/* Country Dropdown for Mobile */}
              <div ref={dropdownRef} className="relative mx-auto font-sans w-max">
                <button
                  type="button"
                  onClick={toggleCountryDropdown}
                  className="py-1 pr-2 pl-1 rounded text-[#333] text-sm font-semibold border-2 outline-none hover:bg-blue-50 flex items-center"
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
          </div>
        )}
      </main>
    </div>
  );
}

export default Navbar;
