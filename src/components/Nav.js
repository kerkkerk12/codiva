import { NavLink } from "react-router-dom";
import React from "react";
import "../css/Nav.css";
const Nav = () => {
  let activeClassName = "nav-active";

  return (
    <header class="header">
      <div class="mid">
        <img
          class="image"
          src="https://cdn.minorfood.com/uploaded/brand/logo/large/15542614515ca425cb5c71a.png"
          alt="car"
        />
       
        <ul class="navbar" >
          {/* <li>
            <NavLink
              end
              to="/"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Home
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Register
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Nav;
