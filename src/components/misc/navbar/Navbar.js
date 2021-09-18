import React from "react";
import { NavLink } from "react-router-dom";
import Bag from "../bag/Bag";
import NavProfile from "../nav-profile/NavProfile";
import "./Navbar.css";

function Navbar() {
  return (
    <>

      <nav className="navbar navbar-light bg-light fixed-bottom">
        <div className="container-fluid">
          <NavLink
            className="nav-link fa fa-home fa-fw text-muted"
            aria-hidden="true"
            exact
            to="/"
          >
            {" "}
            Home
          </NavLink>
          <NavLink
            className="nav-link fa fa-gift fa-fw text-muted"
            aria-hidden="true"
            exact
            to="/products"
          >
            {" "}
            Shop
          </NavLink>
          <Bag />
          <NavProfile />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
