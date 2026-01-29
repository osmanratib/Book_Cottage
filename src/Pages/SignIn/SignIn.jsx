import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const SignIn = () => { 

 const authInfo = useContext(AuthContext) ; 


 return (
  <div>
   <h1>this is sign in component{authInfo.length}</h1>
  </div>
 );
};

export default SignIn;