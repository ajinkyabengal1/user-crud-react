import React from 'react'
import ThemeProvider from './theme/ThemeProvider'
import { useSelector } from 'react-redux'
import { RootState } from './redux/store'
import Login from './views/auth/Login'
import ThemeSwitch from './components/ThemeSwitch'

const App = () => {
  const {themeMode} =useSelector((state:RootState)=>state.themeState)
  return (
  <ThemeProvider themeMode={themeMode}>
    <Login/>
    <ThemeSwitch/>
  </ThemeProvider>
  )
}

export default App