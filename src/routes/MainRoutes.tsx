
import React from 'react'
import {useRoutes} from "react-router-dom"
import MainComponent from '../views/main'
import UserAcount from '../views/main/UserAcount'
import PageNotFound from '../views/404'

const MainRoutes = () => {
    const mainRoutes={
        path:'/',
        element:<MainComponent/>,
        children:[
            {
                path:'/',
                element:<UserAcount/>
            },
            {
              path:'*',
              element:<PageNotFound/>
            }
        ]
    }
  return (
    useRoutes([mainRoutes])
  )
}

export default MainRoutes