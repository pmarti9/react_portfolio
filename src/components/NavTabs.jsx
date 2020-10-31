import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./../components/pages/NavTabs.css"

function NavTabs() {
    // We'll go into the Hooks API later, for now, we are just using some code
    // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
    // This allows the component to check the route any time the user uses a link to navigate.
    const location = useLocation();
  
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand"><Link to="/Home" className={location.pathname === "/Home"}>Parker Martin</Link></a>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link 
            to="/Home" 
            className={location.pathname === "/Home" ? "nav-link active" : "nav-link"}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Portfolio"
            className={location.pathname === "/Portfolio" ? "nav-link active" : "nav-link"}>
            Portfolio
          </Link>
          </li>
        <li className="nav-item">
          <Link
            to="/Contact"
            className={location.pathname === "/Contact" ? "nav-link active" : "nav-link"}>
            Contact
          </Link>
        </li>
        
        
      </ul>
      </nav>
    );
  }
  
  export default NavTabs;