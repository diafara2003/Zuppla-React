import { Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Fondo } from '../../../../../SharedComponents/Fondo'
import { HeaderComponent } from '../../../../../SharedComponents/Header'
import { TablePerfiles } from '../Components/TablePerfiles'
import { UseAdmPerfiles } from '../Hook/UseAdmPerfiles'

export const AdmPerfiles = () => {
    const { statePerfil } = UseAdmPerfiles();
    return (
        <Box>
            <HeaderComponent title={`Administración de perfiles`} />
            <Grid item lg={12} xl={12} m={1} position="absolute">
                <Fondo />
            </Grid>
            <Grid container justifyContent={"center"} position={"relative"} top={79}>
                <Grid item lg={8}>
                    <Paper elevation={2}>
                        <TablePerfiles
                            dataTable={statePerfil}
                            onClick={() => {

                            }} />
                    </Paper>
                </Grid>

            </Grid>
        </Box>
    )
}
export default AdmPerfiles