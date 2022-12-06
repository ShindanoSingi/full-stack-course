import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
      return (
            <nav>
                  <ul>
                        <Link to="/">
                              <li>Home</li>
                        </Link>
                        <Link href="/about">
                              <li>About</li>
                        </Link>
                        <Link href="/articles">
                              <li>Articles</li>
                        </Link>
                  </ul>
            </nav>
      );
}

export default NavBar;
