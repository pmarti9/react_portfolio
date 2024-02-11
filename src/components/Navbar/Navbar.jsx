import React from "react";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      // style={{background: "blue"}}
    >
      <a className="navbar-brand" href="../../react_portfolio/Home">
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
        <a className="nav-item nav-link" href="../../react_portfolio/Home"> 
          About
        </a>
        <a className="nav-item nav-link" href="../../react_portfolio/Portfolio">
          Portfolio
        </a>
        <a className="nav-item nav-link" href="../../react_portfolio/Contact">
          Contact
        </a>
      </div>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <a className="dropdown-item" href="../../react_portfolio/Home">
          About
        </a>
        <a className="dropdown-item" href="../../react_portfolio/Portfolio">
          Portfolio
        </a>
        <a className="dropdown-item" href="../../react_portfolio/Contact">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
