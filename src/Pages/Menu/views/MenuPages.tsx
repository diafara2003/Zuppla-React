
import { AppBar, Toolbar, Box } from '@mui/material';
import logo from '../../../img/logoApp/logo.png';
import { MenuOption } from '../Components/MenuOption/view/MenuOption';
import { UserMenu } from '../Components/User/View/UserMenu';
export const MenuPages = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: '#fff', color: '#1E1E1E' }}>
        <Toolbar>
          <img src={logo} alt="Sammy Image" width={50} height={50} />

          <div style={{ display: 'flex', flexGrow: 1, marginLeft: '10px' }}>
            <MenuOption />
          </div>
          <UserMenu />
        </Toolbar>
      </AppBar>




    </Box>
  )
}