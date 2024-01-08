import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";

const NavBar = () => {
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);

  function handleNavMenu(e) {
    e.preventDefault();
    setMobileMenuVisible(!isMobileMenuVisible);
  }

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto py-4 w-4/5 m-auto ">
        {/* Section 1 */}
        <div className="flex items-center justify-between ">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold">
              LOGO
            </Link>
            {/* Add your name or any other content */}
          </div>

          {/* Section 2 */}
          <div className="hidden lg:flex items-center space-x-4 text-xl font-bold">
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/uses">Uses</Link>
          </div>

          {/* Section 3 */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://github.com/Orandifelix"
              target="_blank"
              rel="noopener noreferrer"
            >
              <VscGithub   className="text-2xl font-extrabold "/>
            </a>
            <button onClick={() => console.log("Toggle Background Mode")}>
              <MdDarkMode />
              <CiLight />
            </button>
          </div>

          {/* Mobile menu toggle button */}
          <div className="lg:hidden flex items-center">
            <button onClick={handleNavMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden ${isMobileMenuVisible ? "block" : "hidden"}`}
        >
          <div className="flex flex-col space-y-4 mt-4">
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/uses">Uses</Link>
            <a
              href="https://github.com/Orandifelix"
              target="_blank"
              rel="noopener noreferrer"
            >
              <VscGithub />
            </a>
            <button onClick={() => console.log("Toggle Background Mode")}>
              <CiLight />
              <MdDarkMode />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
