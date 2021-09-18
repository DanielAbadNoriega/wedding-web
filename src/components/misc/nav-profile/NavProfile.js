import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import Logout from "../../logout/Logout";
import { NavLink } from "react-router-dom";

function NavProfile() {
  const auth = useContext(AuthContext);

  return (
    <div className="btn-group dropup">
      <button
        type="button"
        className="btn btn-secondary dropdown-toggle fa fa-user-circle-o"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      ></button>
      <ul className="dropdown-menu bg-light">
        {auth.user ? (
          <div className="container-fluid col-0" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link fa fa-address-card fa-fw text-muted"
                  exact
                  to="/profile"
                >
                  {" "}
                  Profile
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
      </ul>
    </div>
  );
}

export default NavProfile;
