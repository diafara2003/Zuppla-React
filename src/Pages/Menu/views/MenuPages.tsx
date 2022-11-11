
import { ElectricBolt } from '@mui/icons-material';
import { AppBar, Toolbar, Box } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import logo from '../../../img/logoApp/logo.png';
import { MenuOption } from '../Components/MenuOption/view/MenuOption';
import { UserMenu } from '../Components/User/View/UserMenu';
import { AlertProvider } from '../context/AlertProvider';
export const MenuPages = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" color='primary' sx={{ mt: 0, color: 'white' }}>
        <Toolbar>
          {/* <img src={logo} alt="Sammy Image" width={50} height={50} /> */}
          <ElectricBolt color="inherit"
            onClick={() => navigate('/', { replace: true })
            }
          />
          <div style={{ display: 'flex', flexGrow: 1, marginLeft: '10px' }}>
            <MenuOption />
          </div>
          <UserMenu />
        </Toolbar>
      </AppBar>

      <Box component='main' sx={{ flexGrow: 5, p: 0.5, height: 'calc(100vh - 82px)', overflow: 'auto' }}>
        <AlertProvider>
          
          <Outlet />
        </AlertProvider>
      </Box>
    </Box>
  )
}
