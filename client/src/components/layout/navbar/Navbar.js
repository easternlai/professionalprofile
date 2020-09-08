import React from "react";
import "./Navbar.scss";

const Navbar = ({sticky}) => {
  return (
        <nav className={sticky ? "navbar navbar-expand-lg navbar-light bg-dark navbar-sticky": "navbar navbar-expand-lg navbar-light"}>

          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-light" href="#about">About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#experience">Experience</a>
            </li>
          </ul>
        </nav>
  );
};

export default Navbar;
