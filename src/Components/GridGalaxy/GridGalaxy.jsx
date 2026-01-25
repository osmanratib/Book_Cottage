import React from 'react';

const GridGalaxy = () => {
 return (
  <div className='max-w-[1000px] mx-auto m-20'  > 

  <h1 className='text-[35px] font-Rubik font-bold uppercase text-[#000000c9] m-10 text-center' >Cottages for you</h1>
 
   <section className='grid grid-cols-2 gap-10 justify-center  ' >
    <div className="box1    bg-red-600 h-[160px] w-[500px]  rounded-2xl"
     style={{
      backgroundImage:
       "linear-gradient(to bottom, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.55) 100%), url('../../../public/images/cottageOne.jpeg')",
      backgroundSize: "container",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
     }}
    >

    </div>

    <div className="box1   bg-red-600 h-[200px] w-[400px]  rounded-2xl"
     style={{
      backgroundImage:
       "linear-gradient(to bottom, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.55) 100%), url('../../../public/images/cottageOne.jpeg')",
      backgroundSize: "container",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
     }}
    >

    </div>

    <div className="box1   bg-red-600 h-[300px] relative bottom-12 w-[400px]  rounded-2xl"
     style={{
      backgroundImage:
       "linear-gradient(to bottom, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.55) 100%), url('../../../public/images/cottageOne.jpeg')",
      backgroundSize: "container",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
     }}
    >

    </div>

    <div className="box1   bg-red-600 h-[250px]   w-[500px] relative right-24  rounded-2xl  bottom-5" 
     style={{
      backgroundImage:
       "linear-gradient(to bottom, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.55) 100%), url('../../../public/images/cottageOne.jpeg')",
      backgroundSize: "container",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
     }}
    >

    </div> 

   </section> 

   <button className='px-7 py-2 relative left-[40%] bg-black text-white rounded-xl' >Order Cottage</button>



  </div>
 );
};

export default GridGalaxy;