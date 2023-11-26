import { Sheet } from '@mui/joy'
import { LayoutPropsType } from '../interface'
import Navigation from '../components/Navigation'

const Layout = (props:LayoutPropsType) => {
  return (
    <div  id="demo_dark-mode-by-default">
    <Sheet>
      <Navigation/>
      {props.children}
    </Sheet>
    </div>
  )
}

export default Layout