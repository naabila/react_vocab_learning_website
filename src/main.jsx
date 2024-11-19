import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import 'animate.css';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import {
  RouterProvider
} from "react-router-dom";
import './index.css'
import router from './routs/Routes.jsx';
import AuthContextProvider from './utils/AuthContextProvider.jsx';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <AuthContextProvider>
  <RouterProvider router={router} />
  <ToastContainer />
  </AuthContextProvider>
   
  </React.StrictMode>,
)
