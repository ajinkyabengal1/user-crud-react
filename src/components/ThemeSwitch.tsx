import React, { ChangeEvent } from 'react'
import Switch from '@mui/joy/Switch';
import { IoIosSunny,IoMdMoon } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { themeReducer } from '../redux/slices/themeSlice';
const ThemeSwitch = () => {
    const dispatch=useDispatch<AppDispatch>()
    const {themeMode}=useSelector((state:RootState)=>state.themeState)
    const handleThemeSwitch=(event:ChangeEvent<HTMLInputElement>)=>{
        event.target.checked ? dispatch(themeReducer('dark')):dispatch(themeReducer('light'))
    }
  return (
    <Switch
      onChange={handleThemeSwitch}
      size="lg"
      slotProps={{
        input: { 'aria-label': 'Dark mode' },
        thumb: {
          children: themeMode==="dark"?<IoMdMoon color='white' style={{background:'black',borderRadius:'50%'}} size={20} />:<IoIosSunny size={20} />,
          sx:{
            borderRadius:'50%',
            background:themeMode==='dark'?"black":'white'
          }
        },
        track:{
           sx:{ background:themeMode==="dark"?"#121212":"#c5c6d0",border:'1px solid #333333',borderRadius:"30px"}
        }
      }}
      sx={{
        '--Switch-thumbSize': '25px',
        '--Switch-trackWidth': '45px',
        '--Switch-trackHeight': '21px',
        
      }}
    />
  )
}

export default ThemeSwitch