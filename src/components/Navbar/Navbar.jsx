import React from "react";

function Navbar() {
  return (
    <nav
      classNameName="navbar navbar-expand-lg navbar-dark"
      styleName="background-color: darkred"
    >
      <a className="navbar-brand" href="index.html">
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
        <a className="nav-item nav-link active" href="index.html">
          About
        </a>
        <a className="nav-item nav-link" href="portfolio.html">
          Portfolio
        </a>
        <a className="nav-item nav-link" href="contact.html">
          Contact
        </a>
      </div>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <a className="dropdown-item" href="index.html">
          About
        </a>
        <a className="dropdown-item" href="portfolio.html">
          Portfolio
        </a>
        <a className="dropdown-item" href="contact.html">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
