import React from 'react'
import { Link } from 'react-router-dom'


function NavBar() {
  return (
    <nav>
      <ul>
            <Link to="/">
            <li>Home</li>
            </Link>
            <Link href="/">
            <li>About</li>
            </Link>
            <Link href="/">

            </Link>


            <li>Articles</li>
      </ul>
    </nav>
  )
}

export default NavBar