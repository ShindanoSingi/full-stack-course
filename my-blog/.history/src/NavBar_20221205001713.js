import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
	const navLinkStyle = () =>{
		return
	}
      return (
            <nav>
                  <ul>
                        <Link to="/">
                              <li>Home</li>
                        </Link>
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
