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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    setIsSubMenuOpen(false);
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

  // Shared function to map menu data (for both desktop and mobile)
  const renderMenuContent = (item) => {
    if (complexDropdownItems.includes(item)) {
      return menuData
        .filter((menu) => menu.name === item)
        .map((menu, menuIndex) => (
          <div key={menuIndex} className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
            {menu.content.map((section, sectionIndex) => (
              <div key={sectionIndex} className="w-full">
                <h4 className="mb-2 font-medium underline decoration-blue-500 underline-offset-8">
                  {section.title}
                </h4>
                <ul>
                  {section.links.map((link, linkIndex) => (
                    <li
                      key={linkIndex}
                      className="flex items-center mb-2 text-sm font-normal"
                    >
                      {link.icon ? (
                        <i className={`${link.icon} mr-2 text-blue-600`}></i>
                      ) : (
                        <Image
                          src={link.image}
                          alt={link.name}
                          className="w-6 h-6 mr-2"
                        />
                      )}
                      <a className="ml-2 cursor-pointer hover:text-blue-500">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ));
    } else if (normalDropdownItems.includes(item)) {
      return NormalMenuData.filter((menu) => menu.name === item).map(
        (menu, menuIndex) => (
          <div
            key={menuIndex}
            className="grid grid-cols-1 gap-4 p-4 text-sm md:grid-cols-1"
          >
            <ul>
              {menu.content.map((link, linkIndex) => (
                <li key={linkIndex} className="flex items-center mb-2">
                  {link.icon ? (
                    <i className={`${link.icon} mr-2 text-blue-600`}></i>
                  ) : (
                    <Image
                      src={link.image}
                      alt={link.name}
                      className="w-6 h-6 mr-2"
                    />
                  )}
                  <a className="ml-2 font-normal cursor-pointer hover:text-blue-500">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )
      );
    } else {
      return null;
    }
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <main className="bg-[#F2F4F7] font-inherit text-inherit font-medium leading-inherit text-[#0C0F13] capitalize pt-12 pl-[50px] pr-[10px] h-[60px] lg:h-full xl:h-full 2xl:h-full">
        {/* Desktop Menu */}
        <ul className="flex-wrap items-center hidden space-x-3 text-lg lg:flex pb-11">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative"
              onMouseOver={() => handleMouseOver(index)}
              onMouseLeave={handleMouseLeave}
            >
              <span className="flex items-center cursor-pointer">
                {item}
                <i className="items-center ml-1 text-sm cursor-pointer fa fa-angle-down" aria-hidden="true"></i>
              </span>
              {openIndex === index && (
                <div className="absolute mt-2 w-[700px] bg-white text-black top-full p-1 rounded-lg shadow-lg overflow-hidden z-10">
                  <hr className="w-full h-0.5 bg-blue-400 border-0 rounded" />
                  {renderMenuContent(item)}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="absolute right-0 pr-4 mb-8 top-3 lg:hidden">
          <button onClick={toggleMobileMenu} className="text-2xl" aria-label="Toggle menu">
            {isMobileMenuOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute top-0 left-0 w-5/6 h-screen p-4 overflow-x-hidden bg-white shadow-lg lg:hidden">
            <ul className="space-y-4">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <div className="flex items-center justify-between">
                    <a className="cursor-pointer" onClick={() => toggleSubMenu(index)}>
                      {item}
                    </a>
                    <i
                      className={`ml-2 cursor-pointer fa fa-angle-down ${
                        openSubMenuIndex === index && isSubMenuOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    ></i>
                  </div>
                  {isSubMenuOpen[index] && (
                    <div className="pl-4 mt-2 space-y-2">
                      {renderMenuContent(item)}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
}

export default Navbar;
