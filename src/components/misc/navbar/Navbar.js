import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Logout from "../../logout/Logout";

function Navbar() {
  const auth = useContext(AuthContext);

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
                className="nav-link fa fa-home"
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
                className="nav-link fa fa-gift"
                aria-hidden="true"
                exact
                to="/products"
              >
                {" "}
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="#">
                Wishlist
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link fa fa-shopping-bag"
                aria-hidden="true"
                exact
                to="/order"
              >
                {" "}
                Bag
              </NavLink>
            </li>

                {auth.user ? (
                    
                    <div className="container-fluid" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {auth.user?.name && (
                            <li className="nav-item">
                            <span className="nav-link me-3">
                                Hi {auth.user?.name}!
                            </span>
                            </li>
                        )}
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/profile">
                            Profile <span className="sr-only">(current)</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="#">
                            My orders
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <Logout />
                        </li>
                        </ul>
                    </div>
                    ) : (
                    <NavLink className="nav-link fa fa-sign-in" exaxt to="/login" />
                    )
                    
                }
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
