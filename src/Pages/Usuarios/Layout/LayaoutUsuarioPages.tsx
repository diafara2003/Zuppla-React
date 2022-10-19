import React, { useState } from 'react'
import { HeaderComponent } from '../../../SharedComponents/Header';
import { NavigationComponent } from '../../../SharedComponents/Navigation';
import { Grid } from '@mui/material';

import RoutesGestionUsuario, { rutas } from '../router/router';


export const LayaoutUsuarioPages = () => {
    const [sizeLayout, setSizeLayout] = useState(9.7)
    return (
        <Grid container spacing={2} >


            <NavigationComponent 
                options={rutas}
                sizeLayout={(size)=>{
                    console.log(size)
                    setSizeLayout(size)
                }}  />

            <Grid item xs={sizeLayout} sx={{ paddingLeft: '0px !important' }}   >
                <RoutesGestionUsuario />
            </Grid>
        </Grid>
    )
}


export default LayaoutUsuarioPages;