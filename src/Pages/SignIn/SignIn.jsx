import { useState } from "react";
import { BsEyeFill } from "react-icons/bs";
import { RiEyeCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";


const SignIn = () => {

 const [visible, setVisible] = useState(true);

 const handleSignIn = (e) => {
  e.preventDefault();
  const form = e.target;

  const email = form.email.value;
  const password = form.password.value;
  console.log(email, password);
 }

 return (
  <div onSubmit={handleSignIn} className='grid justify-center items-center mt-[8%] '>
   <form
    className='space-y-7 border-2 rounded-lg border-[#0000009a] p-5 '
   >
    <h1 className='text-[24px] font-Rubik mb-5 '>signIn with <span className='text-[24px] font-right'>Cottage Arena</span> </h1>
    <div className="email">
     <input className='w-[350px] h-[20px] p-5 border-2 border-black  outline-none rounded-md' type="email" name='email' placeholder='name@gmail.com' required />
    </div>

    <div className="password flex items-center justify-between w-[350px] h-[20px] p-5 border-2 border-black rounded-md">
     <input className=' outline-none ' type={visible ? "password" : "text"} name='password' placeholder='password' required />
     <div><span onClick={() => setVisible(!visible)} >{visible ? <BsEyeFill /> : <RiEyeCloseFill />}</span></div>
    </div> 

    <div className="submit ">
     <input className='w-[350px] h-[30px] border-2 cursor-pointer  bg-black
     hover:bg-[#000000c4] duration-100 delay-753  text-white border-black outline-none rounded-md' type="submit" placeholder='submit' />
    </div>

    <div className='flex items-center gap-3 font-Rubik capitalize' >
     <h1>Don't have an account ? </h1>
     <Link to={'/signup'} className='underline text-blue-400' >sign up</Link>
    </div> 



   </form>
  </div>
 );
};

export default SignIn;