
import { ElectricBolt } from '@mui/icons-material';
import { AppBar, Toolbar, Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import logo from '../../../img/logoApp/logo.png';
import { MenuOption } from '../Components/MenuOption/view/MenuOption';
import { UserMenu } from '../Components/User/View/UserMenu';
export const MenuPages = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: '#fff', color: '#1E1E1E' }}>
        <Toolbar>
          {/* <img src={logo} alt="Sammy Image" width={50} height={50} /> */}
          <ElectricBolt />

          <div style={{ display: 'flex', flexGrow: 1, marginLeft: '10px' }}>
            <MenuOption />
          </div>
          <UserMenu />
        </Toolbar>
      </AppBar>

      <Box component='main' sx={{ flexGrow: 5, p: 1,  height: 'calc(100vh - 88px)', overflow: 'auto' }}>
        <Outlet />
      </Box>
    </Box>
  )
}
