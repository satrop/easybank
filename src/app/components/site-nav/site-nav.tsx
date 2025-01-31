"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "../button/button";

// Import the data
import data from "./site-nav.json";

// Define link structure for mobile
interface Link {
  text: string;
  href: string;
}

const navLinks: Link[] = [
  { text: "Home", href: "/dummy-link/" },
  { text: "About", href: "/dummy-link/" },
  { text: "Services", href: "/dummy-link/" },
  { text: "Portfolio", href: "/dummy-link/" },
  { text: "Contact", href: "/dummy-link/" },
];

const Nav: React.FC = () => {
  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-4 lg:p-0 bg-white text-easybankBlue">
      <div className="flex items-center justify-between mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Image
          src="/logo.svg"
          alt="Easybank logo"
          width={139}
          height={20}>
        </Image>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="lg:hidden">
        {/* Conditional rendering based on isMenuOpen */}
        {isMenuOpen ? (
          <Image
            src="/icon-close.svg"
            alt="Close Icon"
            width={18}
            height={19}
          />
        ) : (
          <Image
            src="/icon-hamburger.svg"
            alt="Hamburger Icon"
            width={30}
            height={30}
          />
        )}
        </button>

        {/* Links */}
        <div className="hidden lg:flex gap-7">
          {navLinks.map((link) => (
            <a
              key={link.text}
              href={link.href}
              className="hidden lg:block text-gray-400 leading-extra-loose transition duration-300 hover:text-black hover:bg-easybankUnderLine hover:bg-no-repeat hover:bg-underline hover:bg-underline"
            >
              {link.text}
            </a>
          ))}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            `${isMenuOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-14 opacity-0 pointer-events-none"} transition-all duration-300 ease-in-out
            lg:hidden absolute top-24 left-0 right-0 p-4 rounded-sm max-w-[320px] mx-auto bg-white text-center`
          }
        >
          {navLinks.map((link) => (
            <a
              key={link.text}
              href={link.href}
              className="block text-easybankBlue py-2 "
            >
              {link.text}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <Button label={data.button_text} />
      </div>
    </nav>
  );
};

export default Nav;
