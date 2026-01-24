import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
// import Home from '../Pages/Home/Home';

const MainLay = () => {
 return (
  <div>
   <Navbar />
   <Outlet />
  </div>
 );
};

export default MainLay;