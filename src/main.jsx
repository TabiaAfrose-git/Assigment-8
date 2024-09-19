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
import Error from './Components/Error/Error';
import BookDetails from './Components/BookDetails/BookDetails';


const router = createBrowserRouter([

    { path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<Error></Error>,
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
        },
        {
          path:"/book/:id",
          element:<BookDetails></BookDetails>,
          loader: ()=> fetch('../public/Data.json')
        }


      ]
    },

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
