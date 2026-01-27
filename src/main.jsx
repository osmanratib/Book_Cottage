import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLay from './Mainlay/MainLay';
import BookCottage from './Pages/BookingCottage/BookCottage';
import Home from './Pages/Home/Home';
import Cottage from './Pages/Cottage/Cottage';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLay />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/bookCottage',
        element: <BookCottage />
      },
      {
        path: '/cottage',
        element: <Cottage />
      } ,
      
    ]
  },
  {
    path: '/signIn',
    element: <SignIn />
  } ,
  {
    path:'/signUp' , 
    element : <SignUp/> 
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
