import React from 'react';
import catLogo from '../assets/cat-logo.png';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <Link to='/'>
        <img id='cat-logo' src={catLogo} alt="a cat logo" />
      </Link>
    </nav>
  );
}

export default NavBar;