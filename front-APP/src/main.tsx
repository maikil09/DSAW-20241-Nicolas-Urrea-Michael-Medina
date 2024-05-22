import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './routes/Login.tsx'
import Signup from './routes/Signup.tsx'
import Home from './routes/Home.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute.tsx'
import { AuthProvider } from './Auth/AuthProvider.tsx'
import Create from './routes/Create.tsx'
import Search from './routes/Search.tsx'
import Profile from './routes/Profile.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
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
        element: <Home/>,
      },
      {
        path: "/create",
        element: <Create/>,
      },
      {
        path: "/search",
        element: <Search/>,
      },
      {
        path: "/profile",
        element: <Profile/>,
      },
    ],
  },

]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);