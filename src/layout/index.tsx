import { Sheet } from '@mui/joy'
import { LayoutPropsType } from '../interface'
import Navigation from '../components/Navigation'

const Layout = (props:LayoutPropsType) => {
  return (
    <Sheet>
      <Navigation/>
      {props.children}
    </Sheet>
  )
}

export default Layout