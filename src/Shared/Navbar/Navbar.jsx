import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
 return (
  <div>
   <div className="content">
    <div className="logo">

    </div>
    <div className="text">
     <ul>
      <NavLink><li>Home</li></NavLink>
      <NavLink><li>cottages</li></NavLink>
      <NavLink><li>Booked Cottage</li></NavLink>
      <NavLink><li>Sign In </li></NavLink>
     </ul>
    </div>
   </div>
  </div>
 );
};

export default Navbar;