import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Home from './Pages/Home/Home';
import ListedBooks from './Pages/ListedBooks/ListedBooks';
import PagesToRead from './Pages/PagesToRead/PagesToRead';
import MainLayout from './Layouts/MainLayout';
import AboutUs from './Pages/AboutUs/AboutUs';
import Contact from './Pages/Contact/Contact';


const router = createBrowserRouter([

    { path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/listedbooks",
          element: <ListedBooks></ListedBooks>,
        },
        {
          path: "/pagestoread",
          element: <PagesToRead></PagesToRead>
        },
        {
          path:"/about",
          element: <AboutUs></AboutUs>
        },
        {
          path:"/contact",
          element:<Contact></Contact>
        }

      ]
    },

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
