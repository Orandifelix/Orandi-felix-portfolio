import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex items-center justify-between text-white w-4/5 m-auto">
      <div className="flex items-center justify-between">
        <Link to="/" className="mr-4">
          Home
        </Link>
        <Link to="/about" className="mr-4">
          About
        </Link>
        <Link to="/blog" className="mr-4">
          Blog
        </Link>
        <Link to="/projects" className="mr-4">
          Projects
        </Link>
        <Link to="/uses">Uses</Link>
      </div>
      <div>© {currentYear} Orandi Felix. All rights reserved.</div>
    </div>
  );
}

export default Footer;
