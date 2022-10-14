import React from 'react'
import { HeaderComponent } from '../../../SharedComponents/Header';
import { NavigationComponent } from '../../../SharedComponents/Navigation';
import { Grid } from '@mui/material';

import RoutesGestionUsuario, { rutas } from '../router/router';


export const LayaoutUsuarioPages = () => {

    return (
        <Grid container spacing={2} >


            <NavigationComponent options={rutas} />

            <Grid item xs={9.7} sx={{ paddingLeft: '0px !important' }}   >
                <RoutesGestionUsuario />
            </Grid>
        </Grid>
    )
}


export default LayaoutUsuarioPages;