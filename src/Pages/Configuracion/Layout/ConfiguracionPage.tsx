import { Grid } from '@mui/material'
import React, { useState } from 'react'
import { NavigationComponent } from '../../../SharedComponents/Navigation'
import {RouterConfiguracion, rutas} from '../Router/RouterConfiguracion'


export const ConfiguracionPage = () => {
  const [sizeLayout, setSizeLayout] = useState({ sm: 12, lg: 9.9, md: 9.9, xs: 12 })
  return (

      <Grid container>
          <NavigationComponent
              options={rutas}
              sizeLayout={(size) => {
                  setSizeLayout(size)
              }} />

          <Grid item {...sizeLayout} sx={{ backgroundColor: 'white' }}   >
              <RouterConfiguracion />
          </Grid>
      </Grid>

  )
  
}

export default ConfiguracionPage