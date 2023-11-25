import React from 'react'
import {useRoutes} from "react-router-dom"
import AuthComponent from '../views/auth'
import Login from '../views/auth/Login'
import Register from '../views/auth/Register'
import PageNotFound from '../views/404'
const AuthenticationRoutes = () => {

  const authRoutes={
    path:'/',
    element:<AuthComponent/>,
    children:[
      {
        path:'/',
        element:<Login/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'*',
        element:<PageNotFound/>
      }
    ]
  }

  return (
   useRoutes([authRoutes])
  )
}

export default AuthenticationRoutes