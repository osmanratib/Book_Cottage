import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
 return (
  <div className='p-5 max-w-[1000px] mx-auto'>
   <div className="content flex items-center justify-between">
    <div className="logo">
      <h1 className='font-right '>Cottage Arena</h1>
    </div>
    <div className="text">
     <ul className='flex items-center gap-10 text-[14px] font-bold' >
      <NavLink to={"/"}  ><li>Home</li></NavLink>
      <NavLink to={"/cottage"}  ><li>cottages</li></NavLink>
      <NavLink to={"/bookCottage"}  ><li>Booked Cottage</li></NavLink>
      <NavLink to={"/signIn"} className={"px-7 py-1 bg-black text-white rounded-2xl hover:bg-[#4f4c4c] delay-50 duration-500"}   ><li>Sign In </li></NavLink>
     </ul>
    </div>
   </div>
  </div>
 );
};

export default Navbar;