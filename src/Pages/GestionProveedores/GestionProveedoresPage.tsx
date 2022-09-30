import { Badge, Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import { BrowserRouter, NavLink, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { HeaderPages } from './Components/HeaderPage/View/HeaderPages'
import { LogoEmpresa } from './Components/LogoProveedor/View/LogoEmpresa'
import { GestionProveedoresLayout } from './Layout/GestionProveedoresLayout'
import { InformacionGeneralPage } from './Views/InformacionGeneral/View/InformacionGeneralPage'


import BusinessIcon from '@mui/icons-material/Business';
import ContactsIcon from '@mui/icons-material/Contacts';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import DescriptionIcon from '@mui/icons-material/Description';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import FolderOpenTwoToneIcon from '@mui/icons-material/FolderOpenTwoTone';
import StarRateIcon from '@mui/icons-material/StarRate';
import React from 'react'
import { DatosContactos } from './Views/DatosContactos/View/DatosContactoPage'
import { DatosNotifiaciones } from './Views/DatosNotificaciones/View/DatosNotificacionesPage'
import { CamaraComercio } from './Views/CamaraComercio/View/CamaraComercioPage'


const drawerWidth = 280;
export const GestionProveedoresPage = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
    };

    return (
        <>

            <Box sx={{ display: 'flex', backgroundColor: "white" }}>
                <HeaderPages drawerWidth={drawerWidth} />
                {/* <SubMenu drawerWidth={drawerWidth} /> */}
                <Box
                    component='nav'
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                >
                    <Drawer
                        variant='permanent'
                        open
                        sx={{
                            display: { xs: 'block' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: "white !important" },
                        }}
                    >
                        <Box sx={{ m: 1 }}>
                            <LogoEmpresa />
                        </Box>
                        <Divider />

                        <List>
                            <NavLink className={"nav-link"} style={{ textDecoration: "none", color: "black" }} to="/gestionproveedor/InfGeneralPage">
                                <ListItem disablePadding>
                                    <ListItemButton
                                        className='ListJk'
                                        selected={selectedIndex === 0}
                                        onClick={(event) => handleListItemClick(event, 0)}
                                    >

                                        <ListItemIcon>
                                            <BusinessIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Informacion General" />

                                    </ListItemButton>
                                </ListItem>
                            </NavLink>
                            <NavLink className={"nav-link"} style={{ textDecoration: "none", color: "black" }} to="/gestionproveedor/DatosContactosPage">
                                <ListItem disablePadding>
                                    <ListItemButton
                                        selected={selectedIndex === 1}
                                        onClick={(event) => handleListItemClick(event, 1)}
                                    >
                                        <ListItemIcon>
                                            <ContactsIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Datos contacto" />
                                    </ListItemButton>
                                </ListItem>
                            </NavLink>
                            <NavLink className={"nav-link"} style={{ textDecoration: "none", color: "black" }} to="/gestionproveedor/DatosNotificaciones">
                                <ListItem disablePadding>
                                    <ListItemButton
                                        selected={selectedIndex === 2}
                                        onClick={(event) => handleListItemClick(event, 2)}
                                    >
                                        <ListItemIcon>
                                            <ContactMailIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Datos notificaciones" />
                                    </ListItemButton>
                                </ListItem>
                            </NavLink>
                            <NavLink className={"nav-link"} style={{ textDecoration: "none", color: "black" }} to="/gestionproveedor/Documentos">
                                <ListItem disablePadding>
                                    <ListItemButton
                                        selected={selectedIndex === 3}
                                        onClick={(event) => handleListItemClick(event, 3)}
                                    >
                                        <ListItemIcon>
                                            <FolderOpenTwoToneIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Documentos" />
                                    </ListItemButton>
                                </ListItem>
                            </NavLink>
                            <NavLink className={"nav-link"} style={{ textDecoration: "none", color: "black" }} to="/gestionproveedor/CamaraComercio">
                                <ListItem disablePadding>
                                    <ListItemButton
                                        selected={selectedIndex === 4}
                                        onClick={(event) => handleListItemClick(event, 4)}
                                    >
                                        <ListItemIcon>
                                            <DescriptionIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Camara de comercio" />
                                    </ListItemButton>
                                </ListItem>
                            </NavLink>
                            <NavLink className={"nav-link"} style={{ textDecoration: "none", color: "black" }} to="/gestionproveedor/Novedades">
                                <ListItem disablePadding>
                                    <ListItemButton
                                        selected={selectedIndex === 5}
                                        onClick={(event) => handleListItemClick(event, 5)}
                                    >
                                        <ListItemIcon >
                                            <Badge color="primary" badgeContent={2}>
                                                <NotificationsActiveIcon />
                                            </Badge>
                                        </ListItemIcon>
                                        <ListItemText primary="Novedades" />
                                    </ListItemButton>
                                </ListItem>
                            </NavLink>
                            <NavLink className={"nav-link"} style={{ textDecoration: "none", color: "black" }} to="/gestionproveedor/Novedades">
                                <ListItem disablePadding>
                                    <ListItemButton
                                        selected={selectedIndex === 6}
                                        onClick={(event) => handleListItemClick(event, 6)}
                                    >
                                        <ListItemIcon >
                                            <StarRateIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Especialidades" />
                                    </ListItemButton>
                                </ListItem>
                            </NavLink>
                        </List>
                    </Drawer>
                </Box>
                <Box
                    component='main'
                    sx={{ flexGrow: 5, p: 1 }}
                >
                    <Toolbar />
                    <Routes>
                        <Route path="/InfGeneralPage" element={<InformacionGeneralPage />} />
                        <Route path="/DatosContactosPage" element={<DatosContactos />} />
                        <Route path="/DatosNotificaciones" element={<DatosNotifiaciones />} />
                        <Route path="/CamaraComercio" element={<CamaraComercio />} />

                        <Route path="/*" element={<Navigate to="/gestionproveedor/InfGeneralPage" />}></Route>
                    </Routes>

                    {/* {children} */}
                </Box>
            </Box>

        </>
        // <GestionProveedoresLayout>
        //     {/* <InformacionGeneralPage /> */}


        // </GestionProveedoresLayout>
    )
}
