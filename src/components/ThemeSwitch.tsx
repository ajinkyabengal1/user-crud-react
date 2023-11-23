import React from 'react'
import Switch from '@mui/joy/Switch';
import { IoIosSunny,IoMdMoon } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { themeReducer } from '../redux/slices/themeSlice';
const ThemeSwitch = () => {
    const dispatch=useDispatch<AppDispatch>()
    const {themeMode}=useSelector((state:RootState)=>state.themeState)
    const handleThemeSwitch=(event:any)=>{
        event.target.checked ? dispatch(themeReducer('dark')):dispatch(themeReducer('light'))
    }
  return (
    <Switch
      onChange={handleThemeSwitch}
      size="lg"
      slotProps={{
        input: { 'aria-label': 'Dark mode' },
        thumb: {
          children: themeMode==="dark"?<IoMdMoon color='white' style={{background:'black',borderRadius:'50%'}} />:<IoIosSunny/>,
          
        },
        track:{
           sx:{ background:themeMode==="dark"?"#121212":"#c5c6d0",border:'1px solid #333333'}
        }
      }}
      sx={{
        '--Switch-thumbSize': '16px',
        '--Switch-trackWidth': '36px',
        '--Switch-trackHeight': '21px',
        
      }}
    />
  )
}

export default ThemeSwitch