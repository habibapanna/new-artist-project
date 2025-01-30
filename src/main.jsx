import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main';
import Home from './components/Pages/Home/Home';
import Portfolio from './components/Pages/Portfolio/Portfolio';
import About from './components/Pages/About/About';
import Contact from './components/Pages/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <h2 className='text-4xl text-red-500 font-bold'>Page is not found</h2>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'portfolio',
        element: <Portfolio></Portfolio>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path: '/',
        element: <Home></Home>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
