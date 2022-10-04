import { Badge, Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import { Routes, Route, Navigate } from 'react-router-dom'
import { HeaderPages } from './Components/HeaderPage/View/HeaderPages'

import React from 'react'
import { SubMenu } from './Components/NavigationMenu/View/SubMenu'
import RoutesGestionProveedores from './Routes/RoutesGestionProveedores'
import { InformacionGeneralPage } from './Views/InformacionGeneral/View/InformacionGeneralPage'
import Hidden from '@mui/material/Hidden/Hidden'


const drawerWidth = 280;
export const GestionProveedoresPage = () => {
    return (
        <>
            <Box sx={{ display: 'flex', backgroundColor: "white" }}>
                <HeaderPages drawerWidth={drawerWidth} />
                <SubMenu drawerWidth={drawerWidth} />
                <Box
                >
                    <Toolbar />
                    <Box sx={{mt:8}}>
                        <RoutesGestionProveedores />
                    </Box>

                </Box>
            </Box>
        </>
    )
}
