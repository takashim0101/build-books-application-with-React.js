import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
        <div><h1>React Books App</h1></div>
        <div>
            <Link to="/">Home</Link>
            <Link to="/favorites">Your Favorites</Link>
        </div>
    </div>
  );
}

export default Navbar;

