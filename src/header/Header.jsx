import React from 'react';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      
      <nav>
        <span>My Website</span>  <br />
        {/* <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact Us</a> */}
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/users'}>Users</NavLink>
        <NavLink to={'/posts'}>Posts</NavLink>
        <NavLink to={'/about'}>About Us</NavLink>
        <NavLink to={'/contact'}> Contact Us</NavLink>
      </nav>
    </div>  
  );
};

export default Header;