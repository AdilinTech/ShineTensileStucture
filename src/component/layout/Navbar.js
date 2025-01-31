import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
    <img src="/image/logo.png"/>

      <ul className="nav-links">
        <li><a href="#">HOME</a></li>
        <li><a href="#">PROJECTS</a></li>
        <li><a href="#">PROCESS</a></li>
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">CONTACTS</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
  