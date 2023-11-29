import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { FaDribbble, FaFacebook, FaTwitter } from "react-icons/fa6";
function Navbar() {
  const navItems = [
    { path: "/", link: "Home" },
    { path: "/blogs", link: "Blog" },
    { path: "/contact", link: "Contact" },
    { path: "/about", link: "About" },
    { path: "/services", link: "Services" },
  ];
  return (
    <>
      <nav className="bg-black py-5 ">
        <div className="container">
          <div className="nav_wrapper flex justify-between">
            <div className="logo text-purple-600 text-3xl">
              <span className="text-red-400 text-lg">My</span>Blog
            </div>
            <menu className="flex gap-10">
              {navItems.map(({ path, link }) => (
                <li
                  key={path}
                  className="text-white hover:text-red-600 transition-all ease-linear duration-300"
                >
                  <NavLink to={path}>{link}</NavLink>
                </li>
              ))}
            </menu>

            <menu className="social flex gap-5 ">
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
            </menu>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
