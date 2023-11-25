import * as React from 'react'
import { Avatar, Box } from '@mui/joy'
import { IoMenu } from "react-icons/io5";
import { PiUserCircleGearFill } from "react-icons/pi";
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import ThemeSwitch from './ThemeSwitch';
const Navigation = () => {
  const {userData}=useSelector((state:RootState)=>state.authState)
  return (
    <Box className='navbar'>
      {
        userData.isLoggedIn
          ?<Avatar/>
          :<PiUserCircleGearFill color='white' size={50} />
      }
      <ThemeSwitch/>
    </Box>
  )
}

export default Navigation