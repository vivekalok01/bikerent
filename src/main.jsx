import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Bikes from './components/Bikes/Bikes.jsx';
import About from './components/About/About.jsx';
import Home from './components/Home/Home.jsx';
import Contact from './components/Contact/Contact.jsx';
import Login from './components/Home/Login.jsx';
import SignInFrom from './components/Home/SignInFrom.jsx';

const router = createBrowserRouter([
  {path:'/',
    element: <App/>,
    children: [
      {path: '/', element: <Home/>},
      {path: '/bike', element: <Bikes/>},
      {path:'/about', element: <About/>},
      {path: '/contact', element: <Contact/>},
      {path:'/login', element: <Login></Login>},
      {path: '/signin', element: <SignInFrom></SignInFrom>}
    ],
  },
 

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    
    </RouterProvider>
  </StrictMode>,
)
