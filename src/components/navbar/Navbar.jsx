import React, { useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaDribbble,
  FaFacebook,
  FaTwitter,
  FaXmark,
} from "react-icons/fa6";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    { path: "/", link: "Home" },
    { path: "/blogs", link: "Blog" },
    { path: "/contact", link: "Contact" },
    { path: "/about", link: "About" },
    { path: "/services", link: "Services" },
  ];
  return (
    <>
      <nav className="bg-black py-5 text-white fixed top-0 left-0 w-full px-5 md:px-0">
        <div className="container">
          <div className="nav_wrapper flex justify-between items-center">
            <a href="/" className="logo text-purple-600 text-3xl">
              <span className="text-red-400 text-lg">My</span>Blog
            </a>
            <menu className="hidden md:flex md:gap-5 lg:gap-10">
              {navItems.map(({ path, link }) => (
                <li
                  key={path}
                  className="text-white hover:text-red-600 transition-all ease-linear duration-300"
                >
                  <NavLink to={path}>{link}</NavLink>
                </li>
              ))}
            </menu>

            <menu className="social hidden md:flex gap-5 items-center">
              <li>
                <a
                  className=" text-white hover:text-red-600 transition-all ease-linear duration-300"
                  href="#"
                >
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a
                  className=" text-white hover:text-red-600 transition-all ease-linear duration-300"
                  href="#"
                >
                  <FaDribbble />
                </a>
              </li>
              <li>
                <a
                  className=" text-white hover:text-red-600 transition-all ease-linear duration-300"
                  href="#"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <button className="bg-red-400 py-3 px-6 rounded-md hover:bg-red-600 transition-all ease-linear duration-300">
                  Log in
                </button>
              </li>
            </menu>

            <button
              onClick={toggleMenu}
              className="cursor-pointer md:hidden text-lg"
            >
              {isMenuOpen ? <FaXmark /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>
      <menu
        className={`block space-y-4 py-6 bg-white text-black md:hidden gap-10 ${
          isMenuOpen
            ? "fixed top-20 left-0 p-5 w-full h-full transition-all ease-linear duration-300"
            : "hidden"
        }`}
      >
        {navItems.map(({ path, link }) => (
          <li key={path} className="text-black">
            <NavLink onClick={toggleMenu} to={path}>
              {link}
            </NavLink>
          </li>
        ))}
      </menu>
    </>
  );
}

export default Navbar;
