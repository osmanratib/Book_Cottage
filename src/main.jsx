import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLay from './Mainlay/MainLay';
import BookCottage from './Pages/BookingCottage/BookCottage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLay />,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/bookCottage',
        element: <BookCottage />
      } 
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
