import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import 'animate.css';
import {
  RouterProvider
} from "react-router-dom";
import './index.css'
import router from './routs/Routes.jsx';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
