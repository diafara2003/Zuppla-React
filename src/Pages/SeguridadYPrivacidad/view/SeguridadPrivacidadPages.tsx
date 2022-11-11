import { Grid } from '@mui/material'
import { useState } from 'react'
import { NavigationComponent } from '../../../SharedComponents/Navigation'
import RoutesSeguridadPrivacidad, { rutas } from '../Routes/RoutesSeguridadPrivacidad'


export const SeguridadPrivacidadPages = () => {
    const [sizeLayout, setSizeLayout] = useState({ sm: 12, lg: 9.9, md: 9.9, xs: 12 })
    return (
        <>
            <Grid container spacing={2} >

                <NavigationComponent
                    options={rutas}
                    showcolapse={false}
                    sizeLayout={(size) => {
                        setSizeLayout(size)
                    }} />

                <Grid item {...sizeLayout} sx={{ pr: 2, backgroundColor: 'white' }}   >
                    <RoutesSeguridadPrivacidad />
                </Grid>
            </Grid>


        </>
    )
}


export default SeguridadPrivacidadPages;