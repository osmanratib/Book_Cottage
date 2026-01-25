import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
// import Home from '../Pages/Home/Home';

const MainLay = () => {
 return (
  <div>
   <Navbar />
   <Outlet />
   <Footer/>
  </div>
 );
};

export default MainLay;