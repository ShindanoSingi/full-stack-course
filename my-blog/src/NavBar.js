import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {

	const getClass = ({isActive}) => isActive ? 'nav-active' : null

      return (
            <nav>
                  <ul>
                        <NavLink to="/" className={getClass}>
                              <li>Home</li>
                        </NavLink>
                        <NavLink to="/about" className={getClass}>
                              <li>About</li>
                        </NavLink>
                        <NavLink to="/articles" className={getClass}>
                              <li>Articles</li>
                        </NavLink>
                  </ul>
            </nav>
      );
}

export default NavBar;
