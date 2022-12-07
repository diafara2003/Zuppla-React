import { Grid } from '@mui/material'
import { useState } from 'react'
import { NavigationComponent } from '../../../../SharedComponents/Navigation'
import RouterInfProveedor, { rutas } from '../Routes/RouterInfProveedor'

export const InfProveedorPages = () => {
    const [sizeLayout, setSizeLayout] = useState({ sm: 12, lg: 9.9, md: 9.9, xs: 12 })
    return (

        <Grid container>
            
            <NavigationComponent
                options={rutas}
                showConstructora={true}
                sizeLayout={(size) => {
                    setSizeLayout(size)
                }} 
                
                />
            
            <Grid item {...sizeLayout} sx={{ backgroundColor: 'white' }}   >
                <RouterInfProveedor />
            </Grid>
        </Grid>

    )
}

export default InfProveedorPages;