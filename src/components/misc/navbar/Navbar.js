import React from "react";
import { NavLink } from "react-router-dom";
import NavProfile from "../nav-profile/NavProfile";

function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link fa fa-home fa-fw"
                aria-hidden="true"
                exact
                to="/"
              >
                {" "}
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link fa fa-gift fa-fw"
                aria-hidden="true"
                exact
                to="/products"
              >
                {" "}
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link fa fa-shopping-bag fa-fw"
                aria-hidden="true"
                exact
                to="/order"
              >
                {" "}
                Bag
              </NavLink>
            </li>
            {/* Chart */}
            {/* Nav User */}
            <NavProfile />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
