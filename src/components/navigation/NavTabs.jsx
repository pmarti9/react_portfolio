import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavTabs.css";

function NavTabs() {
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <nav className="navbar navbar-fixed-lg">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            to="/home"
            className={
              location.pathname === "/Home" ? "nav-link active" : "nav-link"
            }
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/portfolio"
            className={
              location.pathname === "/Portfolio"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact"
            className={
              location.pathname === "/Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavTabs;
