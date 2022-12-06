import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
	const navLinkStyle = ({isActive}) => isActive ? 'nav' : null

      return (
            <nav>
                  <ul>
                        <NavLink to="/" className={navLinkStyle}>
                              <li>Home</li>
                        </NavLink>
                        <Link to="/about">
                              <li>About</li>
                        </Link>
                        <Link to="/articles">
                              <li>Articles</li>
                        </Link>
                  </ul>
            </nav>
      );
}

export default NavBar;
