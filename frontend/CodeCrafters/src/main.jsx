import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout'
import Home from '../Components/Home/Home.jsx';
import Games from '../Components/Games/Games';
import Contacts from '../Components/Contacts/Contacts';
import Medical from '../Components/Medical/Medical.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      ,{
        path: "games",
        element: <Games />,
      },
      ,
      {
        path: "contacts",
        element: <Contacts />,
      },
      {
        path: "medical",
        element: <Medical />,
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
