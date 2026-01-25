import React from 'react';

const Hero = () => {
 return (
  <div>
   <div className="boxes flex items-center justify-center  gap-5">
    <div
     className="second-box w-[300px] h-[400px] rounded-lg bg-red-700 "
     style={{
      backgroundImage:
       "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%), url('../../../public/images/cottage3.jpeg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
     }}
    >
     <div className="text">
      <h1 className='font-IBM font-bold text-[25px] text-[#00000092] relative top-[300px] left-8 uppercase ' >cottage for refreshment</h1>
     </div>
    </div>
    <div
     className="second-box w-[300px] h-[400px] rounded-lg bg-red-700 mt-10"
     style={{
      backgroundImage:
       "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%), url('../../../public/images/cottage2.jpeg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
     }}
    >
     <div className="text">
      <h1 className='font-IBM font-bold text-[25px] text-[#00000092] relative top-[300px] left-8 uppercase ' >cottage for <br /> nature</h1>
     </div>
    </div>
    <div
     className="second-box w-[300px] h-[400px] rounded-lg bg-red-700 "
     style={{
      backgroundImage:
       "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%), url('../../../public/images/cottageOne.jpeg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
     }}

    >
     <div className="text">
      <h1 className='font-IBM font-bold text-[25px] text-[#00000092] relative top-[300px] left-8 uppercase ' >cottage for
       <br /> peace</h1>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Hero;