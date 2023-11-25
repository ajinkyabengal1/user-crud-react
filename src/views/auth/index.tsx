import { Box } from "@mui/joy"
import { Outlet } from "react-router-dom"

const AuthComponent=()=>{
    return (
        <Box className='h-100vh'>
            <Outlet/>
        </Box>
    )
}

export default AuthComponent
