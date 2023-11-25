import { BrowserRouter } from 'react-router-dom';
import React from 'react'
import { RouterComponentPropsType } from '../interface';
import AuthenticationRoutes from './AuthenticationRoutes';
import MainRoutes from './MainRoutes';

const RouterComponent = (props:RouterComponentPropsType) => {
  return (
    <BrowserRouter>
    {
      props.isLoggedIn?<MainRoutes/>:<AuthenticationRoutes/>
    }
    </BrowserRouter>
  )
}

export default RouterComponent