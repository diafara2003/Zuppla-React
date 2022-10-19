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
import { useState } from 'react';


const drawerWidth = 280;

export const GestionProveedoresPage = () => {
    const [sizeLayout, setSizeLayout] = useState({sm: 7, lg: 10, md: 10, xs: 7})
    return (
        <>
            <Grid container spacing={2} >
              
                {/* <Box sx={{ m: 0, p: 1, borderRight: "1px solid #ebebeb" }}>
                        <LogoEmpresa />
                    </Box>
                    <Divider /> */}
                <NavigationComponent
                    options={rutas}
                    sizeLayout={(size) => {
                        setSizeLayout(size)
                    }} />               
                <Grid item {...sizeLayout} sx={{ paddingLeft: '0px !important', backgroundColor: 'white' }}   >
                    <RoutesGestionProveedores />
                </Grid>
            </Grid>


        </>
    )
}

export default GestionProveedoresPage;