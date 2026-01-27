import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => { 
 return (
  <div className='grid justify-center items-center mt-[8%] ' >

   <h1 className='text-[24px] font-Rubik mb-5 '>signUp with <span className='text-[24px] font-right'>Cottage Arena</span> </h1>


   <form className='space-y-7 border-2 rounded-lg  border-[#0000009a] p-5 ' >
    <div className="name">
     <input className='w-[350px] h-[20px] p-5 border-2 border-black outline-none rounded-md' type="text" name='name' placeholder='name' required />
    </div>
    <div className="email">
     <input className='w-[350px] h-[20px] p-5 border-2 border-black  outline-none rounded-md' type="email" name='email' placeholder='name@gmail.com' required />
    </div>
    <div className="password">
     <input className='w-[350px] h-[20px] p-5 border-2 border-black outline-none rounded-md' type="password" name='password' placeholder='password' required />
    </div>
    <div className="confirmPassword">
     <input className='w-[350px] h-[20px] p-5 border-2 border-black outline-none rounded-md' type="password" name='confirmPassword' placeholder='confirm password' required />
    </div>
    <div className="agreement flex items-center gap-3">
     <input type="checkbox" name="checkbox" required />
     <h1><a href="#">Agree with our privacy terms ?</a> </h1>
    </div>
    <div className="submit ">
     <input className='w-[350px] h-[30px] border-2 cursor-pointer  bg-black
     hover:bg-[#000000c4] duration-100 delay-753  text-white border-black outline-none rounded-md' type="submit" placeholder='submit' />
    </div>

    <div className='flex items-center gap-3 font-Rubik capitalize' >
     <h1>already have an account ? </h1>
     <Link to={'/signIn'} className='underline text-blue-400' >sign in</Link>
    </div>

   </form>

  </div>
 );
};

export default SignUp;