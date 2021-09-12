import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link fa fa-home" aria-hidden="true" exact to="/"> Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fa fa-gift" aria-hidden="true" exact to="/products"> Shop</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="#">Wishlist</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fa fa-shopping-bag" aria-hidden="true" exact to="/order"> Bag</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fa fa-user" aria-hidden="true" exact to="/profile"> Profile</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}

export default Navbar;