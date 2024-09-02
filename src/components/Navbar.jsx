import React, { useState, useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-full z-10 transition-all duration-300 ${
        scrolling ? "bg-black bg-opacity-75" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-16 py-6 text-white cursor-pointer">
        <img
          className="w-20"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt="logo"
        />

        <ul className="hidden md:flex gap-12">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
        </ul>

        <div className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <IoIosClose className="text-3xl" />
          ) : (
            <RxHamburgerMenu className="text-3xl " />
          )}
        </div>
      </div>

      {/* Sliding menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white py-7 px-8 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        {/* Close button inside the sliding menu */}
        {isMenuOpen && (
          <div className="absolute top-4 right-4" onClick={toggleMenu}>
            <IoIosClose className="text-3xl" />
          </div>
        )}

        <ul className="flex flex-col gap-4 mt-12">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
        </ul>
      </div>

      {/* Overlay to close the menu when clicking outside */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-10"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
