import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo/logo.png";
export default function Navbar() {
  const openSameTab = (url) => {
    window.open(url, "_self", "noreferrer");
  };
  return (
    <nav className={`navbar sticky-top navbar-expand-lg`}>
      <div className="container-fluid" style={{ height: "90px" }}>
        <Link to="/" className="navbar-brand ms-">
          <img
            style={{
              maxWidth: "10rem",
              maxHeight: "8rem",
              marginLeft: "2rem",
              objectFit: "contain",
            }}
            src={logo}
            alt="Logo"
            className="my-auto"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={{ background: "#3056d3" }}
        >
          <ul id="nav" className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link
                className="nav-link ud-menu-scroll"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link ud-menu-scroll"
                aria-current="page"
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link ud-menu-scroll"
                aria-current="page"
                to="/pricing"
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link ud-menu-scroll"
                aria-current="page"
                to="/support"
              >
                Support
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link ud-menu-scroll"
                aria-current="page"
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="navbar-btn d-none d-sm-inline-block me-3">
            <span className=" ud-login-btn"></span>
            <span className="ud-login-btn"></span>
          </div>
        </div>
      </div>
    </nav>
  );
}
