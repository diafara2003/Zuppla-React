import { Badge, Box, Divider, Grid, Toolbar } from '@mui/material'

import RoutesGestionProveedores, { rutas } from './Routes/RoutesGestionProveedores'
import { NavigationComponent, NavigationModel } from '../../SharedComponents/Navigation';

import BusinessIcon from '@mui/icons-material/Business';
import ContactsIcon from '@mui/icons-material/Contacts';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import DescriptionIcon from '@mui/icons-material/Description';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import FolderOpenTwoToneIcon from '@mui/icons-material/FolderOpenTwoTone';
import StarRateIcon from '@mui/icons-material/StarRate';
import { LogoEmpresa } from './Components/LogoProveedor/View/LogoEmpresa';


const drawerWidth = 280;

export const GestionProveedoresPage = () => {
    return (
        <>
            <Grid container spacing={2} >
                {/* <Grid item xs={2.3} > */}
                    {/* <Box sx={{ m: 0, p: 1, borderRight: "1px solid #ebebeb" }}>
                        <LogoEmpresa />
                    </Box>
                    <Divider /> */}
                    <NavigationComponent options={rutas} />
                {/* </Grid> */}
                <Grid item xs={9.5}  sx={{ paddingLeft: '0px !important', backgroundColor:'white',mr:"10px", ml:'10px' }}   >
                    <RoutesGestionProveedores />
                </Grid>
            </Grid>

           
        </>
    )
}

export default GestionProveedoresPage;