import React, { useEffect, useState } from 'react';
import AllCottages from '../../Components/allCottages/allCottages';

const Cottage = () => {

 const [cottageData, setCottageData] = useState([]);
 const [loading, setLoading] = useState(true);


 useEffect(() => {

  fetch('../../../public/json/cottage.json')
   .then(res => res.json())
   .then(data => {
    console.log(data)
    setCottageData(data)
    setLoading(false)
   })
   .catch((error) => {
    console.log(error)
   })

 }, [])




 return (
  <div className='p-8'>
   <div className='grid grid-cols-3 items-center gap-10' >
    {
     loading ? <>
      <h1 className='h-screen'  >loading....</h1>
     </> :
      cottageData.map((cottageData, index) => <AllCottages cottageData={cottageData} key={index} />)
    }
   </div>
  </div>
 );
};

export default Cottage;