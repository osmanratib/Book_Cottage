import React from 'react';

const AllCottages = ({ cottageData }) => {

 const { price, cottage_name, image } = cottageData;

 return (
  <div className='shadow-lg shadow-black rounded-lg p-6 font-Rubik font-bold' >
  <div className='text-center' >
    <img className='w-[300px] h-[200px] rounded-2xl  ' src={image} alt="cottage image" />
    <h1 className='text-[14px]  mt-3' >{cottage_name}</h1>
    <h1 className='mt-2  text-[#00000095]'>price : $ {price}</h1>
  </div> 
  <div className='flex items-center justify-center gap-3 mt-5' >
   <button className='bg-black text-white px-7 py-2 rounded-2xl'  >Book</button>
   <button className='bg-black text-white px-7 py-2 rounded-2xl'  >details</button>
  </div>
  </div>
 );
};

export default AllCottages;