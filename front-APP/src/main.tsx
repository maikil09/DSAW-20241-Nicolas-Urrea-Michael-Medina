import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './routes/Login.tsx'
import Signup from './routes/Signup.tsx'
import Home from './routes/Home.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute.tsx'
import { AuthProvider } from './Auth/AuthProvider.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/",
    element: <ProtectedRoute/>,
    children: [
      {
        path: "/home",
        element: <Home/>
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);