import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-between text-white w-full lg:w-4/5 m-auto py-6">
      <div className="flex items-center mb-4 lg:mb-0">
        <Link to="/" className="mr-4 hover:text-teal-600">
          Home
        </Link>
        <Link to="/about" className="mr-4 hover:text-teal-600">
          About
        </Link>
        <Link to="/blog" className="mr-4 hover:text-teal-600">
          Blog
        </Link>
        <Link to="/projects" className="mr-4 hover:text-teal-600">
          Projects
        </Link>
        <Link to="/uses" className="hover:text-teal-600">
          Uses
        </Link>
      </div>
      <div className="text-center lg:text-right">
        © {currentYear} Orandi Felix. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
