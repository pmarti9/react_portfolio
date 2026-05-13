import React from "react";
import { NavLink } from "react-router-dom";
import "./NavTabs.css";

function NavTabs() {
  return (
    <nav className="navbar navbar-fixed-lg">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavTabs;
