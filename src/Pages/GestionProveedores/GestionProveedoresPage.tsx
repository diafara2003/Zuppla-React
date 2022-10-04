import { Box, Divider, Grid, Toolbar } from '@mui/material'

import { SubMenu } from './Components/NavigationMenu/View/SubMenu'
import RoutesGestionProveedores from './Routes/RoutesGestionProveedores'
import { HeaderComponent } from '../../SharedComponents/Header'
import { NavigationComponent } from '../../SharedComponents/Navigation';
import { NavigationModel } from '../../SharedComponents/Navigation/model/modelNavigation';


import BusinessIcon from '@mui/icons-material/Business';
import ContactsIcon from '@mui/icons-material/Contacts';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import DescriptionIcon from '@mui/icons-material/Description';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import FolderOpenTwoToneIcon from '@mui/icons-material/FolderOpenTwoTone';
import StarRateIcon from '@mui/icons-material/StarRate';
import { LogoEmpresa } from './Components/LogoProveedor/View/LogoEmpresa';
import { Outlet } from 'react-router-dom';


const drawerWidth = 280;
const rutas: NavigationModel[] = [
    {
        path: "/gestionproveedor/InfGeneralPage",
        texto: "Información general",
        Icono: () => < BusinessIcon />
    },
    {
        path: "/gestionproveedor/DatosContactosPage",
        texto: "Datos contacto",
        Icono: () => < ContactsIcon />
    },
    {
        path: "/gestionproveedor/DatosNotificaciones",
        texto: "Datos notificaciones",
        Icono: () => < ContactMailIcon />
    },
    {
        path: "/gestionproveedor/DocumentosAdjuntosPage",
        texto: "Documentos",
        Icono: () => < FolderOpenTwoToneIcon />
    },
    {
        path: "/gestionproveedor/CamaraComercioPage",
        texto: "Cámara de comercio",
        Icono: () => < DescriptionIcon />
    },
    {
        path: "/gestionproveedor/NovedadesPage",
        texto: "Novedades",
        Icono: () => < NotificationsActiveIcon />
    },
    {
        path: "/gestionproveedor/EspecialidadesPage",
        texto: "Especialidades",
        Icono: () => < StarRateIcon />
    },
]
export const GestionProveedoresPage = () => {
    return (
        <>
            <Grid container spacing={2} >
                <Grid item xs={2.3} >
                    <Box sx={{ m: 0, p: 1, borderRight: "1px solid #ebebeb" }}>
                        <LogoEmpresa />
                    </Box>
                    <Divider />
                    <NavigationComponent options={rutas} />
                </Grid>
                <Grid item xs={9.7} sx={{paddingLeft:'0px !important'}}   > 
                    <RoutesGestionProveedores />
                </Grid>
            </Grid>

            {/* <Box sx={{ display: 'flex', backgroundColor: "white" }}>
                <HeaderComponent title={"sadasdas"} marginLeft={drawerWidth} />
                <SubMenu drawerWidth={drawerWidth} />
                <Box
                >
                    <Toolbar />
                    <Box sx={{ mt: 0 }}>
                        <RoutesGestionProveedores />
                    </Box>

                </Box>
            </Box> */}
        </>
    )
}

export default GestionProveedoresPage;