import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header-container'>
      <div className="header"> <Link to={"/"}> Header </Link> </div>
    </div>
  );
}

export default Header