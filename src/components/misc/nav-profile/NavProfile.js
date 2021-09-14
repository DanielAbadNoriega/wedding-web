import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import Logout from "../../logout/Logout";
import { NavLink } from "react-router-dom";

function NavProfile() {
  const auth = useContext(AuthContext);

  return (
    <>
      {auth.user ? (
        <div className="container-fluid" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {auth.user?.name && (
              <li className="nav-item">
                <span className="nav-link me-3">Hi {auth.user?.name}!</span>
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
        <NavLink className="nav-link fa fa-sign-in" exact to="/login" />
      )}
    </>
  );
}

export default NavProfile;
