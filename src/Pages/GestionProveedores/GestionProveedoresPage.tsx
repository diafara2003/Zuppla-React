import { Grid } from '@mui/material'

import RoutesGestionProveedores, { rutas } from './Routes/RoutesGestionProveedores'
import { NavigationComponent } from '../../SharedComponents/Navigation';

import { useState } from 'react';


const drawerWidth = 280;

export const GestionProveedoresPage = () => {
    const [sizeLayout, setSizeLayout] = useState({ sm: 12, lg: 9.9, md: 9.9, xs: 12 })
    return (

        <Grid container>
            <NavigationComponent
                options={rutas}
                sizeLayout={(size) => {
                    setSizeLayout(size)
                }} />

            <Grid item {...sizeLayout} sx={{ backgroundColor: 'white' }}   >
                <RoutesGestionProveedores />
            </Grid>
        </Grid>

    )
}

export default GestionProveedoresPage;