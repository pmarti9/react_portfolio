import React from "react";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{background: "darkred"}}
    >
      <a className="navbar-brand" href="../../Home">
        Parker Martin
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup" />
      <div className="navbar-nav">
        <a className="nav-item nav-link" href="../../Home"> 
          About
        </a>
        <a className="nav-item nav-link" href="../../Portfolio">
          Portfolio
        </a>
        <a className="nav-item nav-link" href="../../Contact">
          Contact
        </a>
      </div>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <a className="dropdown-item" href="../../Home">
          About
        </a>
        <a className="dropdown-item" href="../../Portfolio">
          Portfolio
        </a>
        <a className="dropdown-item" href="../../Contact">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
