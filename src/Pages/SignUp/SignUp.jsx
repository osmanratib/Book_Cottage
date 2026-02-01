import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { BsEyeFill } from "react-icons/bs";
import { RiEyeCloseFill } from "react-icons/ri";
import { sendEmailVerification } from 'firebase/auth';

const SignUp = () => {

   const { createUser } = useContext(AuthContext);
   const [error, setError] = useState(null);
   const [visible, setVisible] = useState(true);
   const navigate = useNavigate();


   const handleForm = (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const confirmPassword = form.confirmPassword.value;
      console.log(email, name, password, confirmPassword);
      setError("");

      if (password < 6) {
         setError("your password length should be at least 6 ")
         return
      }

      if (!/[A-Z]/.test(password)) {
         setError("need one uppercase in password")
         return;
      }

      if (!/[a-z]/.test(password)) {
         setError("need one Lowercase in password")
         return;
      }

      if (!/\d/.test(password)) {
         setError("Password must contain at least one number")
         return;
      }

      if (!/[@$!%*?&]/.test(password)) {
         setError("Password must contain at least one special character (@, #, $, %, etc.)")
         return;
      }

      if (password !== confirmPassword) {
         setError("password and confirm password are not same")
         return;
      }

      createUser(email, password)
         .then(res => {
            console.log(res) ; 
            sendEmailVerification(res.user)
               .then(() => {
                  Swal.fire({
                     title: "sign up successfully and email send (also check spam)",
                     icon: "success",
                     draggable: true
                  });
               })
            form.reset();
            navigate('/');
         }


         )
         .catch(err => {
            console.error(err)
            setError(err.message);
         })


   }

   return (
      <div className='grid justify-center items-center mt-[8%] ' >

         <h1 className='text-[24px] font-Rubik mb-5 '>signUp with <span className='text-[24px] font-right'>Cottage Arena</span> </h1>


         <form onSubmit={handleForm} className='space-y-7 border-2 rounded-lg  border-[#0000009a] p-5 ' >
            <div className="name">
               <input className='w-[350px] h-[20px] p-5 border-2 border-black outline-none rounded-md' type="text" name='name' placeholder='name' required />
            </div>
            <div className="email">
               <input className='w-[350px] h-[20px] p-5 border-2 border-black  outline-none rounded-md' type="email" name='email' placeholder='name@gmail.com' required />
            </div>
            <div className="password flex items-center justify-between w-[350px] h-[20px] p-5 border-2 border-black rounded-md">
               <input className=' outline-none ' type={visible ? "password" : "text"} name='password' placeholder='password' required />
               <div><span onClick={() => setVisible(!visible)} >{visible ? <BsEyeFill /> : <RiEyeCloseFill />}</span></div>
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
            <div>
               {
                  <h1 className='text-[#ab0f0f] text-[12px] font-Rubik' >{error}</h1>
               }
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