import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './Layout/Main.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Blog from './Components/Blog/Blog.jsx';
import Banner from './Components/Banner/Banner.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children : [
      {
        path: "/",
        element : <Banner></Banner>,
        loader : ()=>fetch('http://localhost:5000/chefcard')
      },
      {
        path : "login",
        element : <Login></Login>
      },
      {
        path: "register",
        element : <Register></Register>
      },
      {
        path: "blog",
        element : <Blog></Blog>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
  
)
