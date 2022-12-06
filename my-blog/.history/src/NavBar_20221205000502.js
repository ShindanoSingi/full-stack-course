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
             
            </Link>
            <Link href="/">
             
            </Link>
            
            <li>About</li>
            <li>Articles</li>
      </ul>
    </nav>
  )
}

export default NavBar