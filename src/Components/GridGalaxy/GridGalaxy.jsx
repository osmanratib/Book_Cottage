import React from 'react';

const GridGalaxy = () => {
 return (
  <div className='max-w-[1000px] mx-auto mt-20'  > 

  <h1 className='text-[35px] font-IBM font-bold uppercase text-[#000000c9] m-10 text-center' >Cottages for you</h1>
 
   <section className='grid grid-cols-[0.5fr_1.4fr]  grid-rows-3 gap-5 ' >
    <div className="box1    bg-red-600 h-[160px] w-[500px]  rounded-2xl">

    </div>

    <div className="box1   bg-red-600 h-[200px] w-[400px]  rounded-2xl">

    </div>

    <div className="box1   bg-red-600 h-[300px] relative bottom-32 w-[400px]  rounded-2xl">

    </div>

    <div className="box1   bg-red-600 h-[250px]   w-[500px] relative right-24  rounded-2xl  bottom-24">

    </div> 

   </section>



  </div>
 );
};

export default GridGalaxy;