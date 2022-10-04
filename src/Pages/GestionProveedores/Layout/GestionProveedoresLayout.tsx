import { Badge, Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material"
import { HeaderPages } from "../Components/HeaderPage/View/HeaderPages";


import BusinessIcon from '@mui/icons-material/Business';
import ContactsIcon from '@mui/icons-material/Contacts';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import DescriptionIcon from '@mui/icons-material/Description';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import FolderOpenTwoToneIcon from '@mui/icons-material/FolderOpenTwoTone';

const drawerWidth = 280;

import React from 'react'
import { BrowserRouter, NavLink, Routes, Route, Navigate } from "react-router-dom";
import { LogoEmpresa } from "../Components/LogoProveedor/View/LogoEmpresa";

export const GestionProveedoresLayout = ({ children }: any) => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
    };

  return (
    <Box sx={{ display: 'flex', backgroundColor:"white" }}>
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

                    <Box sx={{ m: 2 }}>
                        <LogoEmpresa />
                    </Box>
                    <Divider />
                    <BrowserRouter>
                        <List>
                            {/* {
                        ['Informacion General', 'Datos contacto', 'Datos notificaciones', 'Documentos', 'Camara de comercio', 'Novedades'].map(text => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {
                                            <BusinessIcon/>
                                        }

                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText secondary={text} title={text} />
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    } */}



                            <ListItem disablePadding>

                                <ListItemButton
                                    className='ListJk'
                                    selected={selectedIndex === 0}
                                    onClick={(event) => handleListItemClick(event, 0)}
                                >
                                    <NavLink to="/home" className={({ isActive }) => isActive ? 'nav-active' : ''}>
                                        <ListItemIcon>
                                            <BusinessIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Informacion General" />
                                    </NavLink>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-active' : ''}>
                                    <ListItemButton
                                        selected={selectedIndex === 1}
                                        onClick={(event) => handleListItemClick(event, 1)}
                                    >

                                        <ListItemIcon>
                                            <ContactsIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Datos contacto" />

                                    </ListItemButton>
                                </NavLink>
                            </ListItem>
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
                        </List>

                        <Routes>
                            <Route path="about" element={<h1>About Page</h1>} />
                            <Route path="users" element={<h1>Users Page</h1>} />
                            <Route path="home" element={<h1>Home Page</h1>} />

                            <Route path="/*" element={<Navigate to="/home" replace />} />
                        </Routes>
                    </BrowserRouter>

                </Drawer>
            </Box>



        <Box
            component='main'
            sx={{ flexGrow: 1, p: 3 }}
        >
            <Toolbar />
            {children}
        </Box>
    </Box>
  )
}
