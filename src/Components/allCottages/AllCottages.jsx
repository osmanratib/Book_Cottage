import React from 'react';

const AllCottages = ({data}) => { 

 const { price, cottage_name, image } = data ; 

 return (
  <div>
      <img className='w-[500px] h-[200px] rounded-2xl' src={image} alt="cottage image" /> 
      <h1 className='text-[14px] font-IBM mt-3 text-[#00000095]' >{cottage_name}</h1> 
   <h1 className='mt-2 font-IBM text-[#00000095]'>price : $ {price}</h1>
  </div>
 );
};

export default AllCottages;