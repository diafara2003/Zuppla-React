import React, { useState } from 'react'
import { HeaderComponent } from '../../../SharedComponents/Header';
import { NavigationComponent } from '../../../SharedComponents/Navigation';
import { Grid } from '@mui/material';

import RoutesGestionUsuario, { rutas } from '../router/router';


export const LayaoutUsuarioPages = () => {
    const [sizeLayout, setSizeLayout] = useState({sm: 7, lg: 10, md: 10, xs: 7})
    return (
        <Grid container spacing={2} >
            <NavigationComponent
                options={rutas}
                sizeLayout={(size) => {                    
                    setSizeLayout(size)
                }} />
            <Grid item {...sizeLayout} sx={{ paddingLeft: '0px !important' }}   >
                <RoutesGestionUsuario />
            </Grid>
        </Grid>
    )
}


export default LayaoutUsuarioPages;