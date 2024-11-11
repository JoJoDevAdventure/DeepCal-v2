'use client';

import { motion, useScroll } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Use Framer Motion to add fixed-top effect with blur on scroll
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 120);
    });
  }, [scrollY]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 bg-primary-black/90 ${
        isScrolled ? "backdrop-blur-md bg-[#]/60" : "bg-transparent"
      } text-white pt-5 pb-5 flex  justify-between items-center px-4 md:px-24 lg:px-32`}
    >
      {/* Logo on the left */}
      <div className="flex items-center">
        <img className="w-24" src="./Logo-W.png" alt="Logo" />
      </div>

      {/* Side menu icon for mobile */}
      <div className="max-lg:flex hidden ">
        <button onClick={toggleMenu} className="text-white text-3xl">
          {isMenuOpen ? "" : <span>&#9776;</span>}
        </button>
      </div>

      {/* Navigation links in the middle (visible on large screens) */}
      <ul className="max-lg:hidden flex space-x-9">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-[#0582B8] cursor-pointer text-xl"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="company"
            smooth={true}
            duration={500}
            offset={-50}
            className="hover:text-[#0582B8] cursor-pointer text-xl"
          >
            Company
          </Link>
        </li>
        <li>
          <Link
            to="solutions"
            smooth={true}
            duration={500}
            offset={-50}
            className="hover:text-[#0582B8] cursor-pointer text-xl"
          >
            Solutions
          </Link>
        </li>
        <li>
          <Link
            to="blog"
            smooth={true}
            duration={500}
            className="hover:text-[#0582B8] cursor-pointer text-xl"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to="industry-news"
            smooth={true}
            duration={500}
            className="hover:text-[#0582B8] cursor-pointer text-xl"
          >
            Industry News
          </Link>
        </li>
      </ul>

      {/* Side menu (visible when isMenuOpen is true) */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 h-screen w-full bg-black/70 z-40"
          onClick={toggleMenu}
        >
          <div className="absolute top-0 left-0 h-full w-60 bg-gray-900 p-8 z-50">
            <ul className="text-white space-y-4">
              <li>
                <button onClick={toggleMenu} className="text-white text-3xl mb-4">&#10005;</button>
              </li>
              <li className="hover:text-[#0582B8] cursor-pointer text-xl">
                <Link to="home" smooth={true} duration={500} onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li className="hover:text-[#0582B8] cursor-pointer text-xl">
                <Link
                  to="company"
                  smooth={true}
                  duration={500}
                  offset={-50}
                  onClick={toggleMenu}
                >
                  Company
                </Link>
              </li>
              <li className="hover:text-[#0582B8] cursor-pointer text-xl">
                <Link
                  to="solutions"
                  smooth={true}
                  duration={500}
                  offset={-50}
                  onClick={toggleMenu}
                >
                  Solutions
                </Link>
              </li>
              <li className="hover:text-[#0582B8] cursor-pointer text-xl">
                <Link to="blog" smooth={true} duration={500} onClick={toggleMenu}>
                  Blog
                </Link>
              </li>
              <li className="hover:text-[#0582B8] cursor-pointer text-xl">
                <Link
                  to="industry-news"
                  smooth={true}
                  duration={500}
                  onClick={toggleMenu}
                >
                  Industry News
                </Link>
              </li>
              <li className="hover:text-[#0582B8] cursor-pointer text-xl">
                <Link
                  to="industry-news"
                  smooth={true}
                  duration={500}
                  onClick={toggleMenu}
                >
                  Request Demo
                </Link>
              </li>
              <li className="hover:text-[#0582B8] cursor-pointer text-xl">
                <Link
                  to="industry-news"
                  smooth={true}
                  duration={500}
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Contact us buttons on the right */}
      <div className="max-lg:hidden flex space-x-4">
        <Link
          to="demo"
          smooth={true}
          duration={500}
          className="bg-transparent hover:text-gray-300 text-white font-semibold py-2 px-4 rounded-full cursor-pointer"
        >
          Demo
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="bg-transparent hover:bg-white hover:text-black text-white font-semibold py-2 px-4 rounded-full border border-white cursor-pointer"
        >
          Contact Us
        </Link>
      </div>
    </motion.nav>
  );
};

export default NavBar;