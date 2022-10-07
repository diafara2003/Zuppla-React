import { Grid, Card, CardHeader, IconButton, CardContent, Box, Typography, Divider } from '@mui/material'
import React from 'react'
import { TerDatosContactoDTO } from '../Model/DatosContactoDTO'
import MoreVertIcon from '@mui/icons-material/MoreVert';
type props = {
    datosContactos: TerDatosContactoDTO[]
}

export const CardContacto = ({ datosContactos }: props) => {
    return (
        <Grid container spacing={2}>
            {
                datosContactos?.map((contacto) => {
                    return (
                        <Grid item xs={4}>
                            <Card variant="outlined" sx={{ backgroundColor: '#FBFBFB' }}>
                                <CardHeader
                                    action={
                                        <IconButton aria-label="settings" color="primary">
                                            <MoreVertIcon />
                                        </IconButton>
                                    }
                                    title={contacto.nombre}
                                    titleTypographyProps={{ variant: 'h6' }}
                                    subheader={contacto.cargo}
                                ></CardHeader>
                                <CardContent>
                                    <Box mb={1} p={0}>
                                        <Typography m={0} p={0} sx={{ fontSize: 11 }} color="text.secondary" gutterBottom>
                                            Numero de documento
                                        </Typography>

                                        <Typography sx={{ fontSize: 17, mb: 0 }} color="text.primary" >
                                            {contacto.numeroDocumento}
                                        </Typography>
                                    </Box>

                                    <Box mb={1} p={0}>
                                        <Typography m={0} p={0} sx={{ fontSize: 11 }} color="text.secondary" gutterBottom>
                                            Email
                                        </Typography>
                                        <Typography sx={{ fontSize: 17, mb: 0 }} color="text.primary" >
                                            {contacto.numeroDocumento}
                                        </Typography>
                                    </Box>

                                    <Grid container mb={1} p={0}>
                                        <Grid item xs={5} mb={1} p={0}>
                                            <Typography m={0} p={0} sx={{ fontSize: 11 }} color="text.secondary" gutterBottom>
                                                Celular
                                            </Typography>
                                            <Typography sx={{ fontSize: 17, mb: 0 }} color="text.primary" >
                                                {contacto.celular}
                                            </Typography>
                                            <Divider orientation="vertical" flexItem />
                                        </Grid>
                                        <Divider orientation="vertical" flexItem />
                                        <Grid item xs={5} mb={1} ml={2} p={0}>
                                            <Typography m={0} p={0} sx={{ fontSize: 11 }} color="text.secondary" gutterBottom>
                                                Telefono
                                            </Typography>
                                            <Typography sx={{ fontSize: 17, mb: 0 }} color="text.primary" >
                                                {contacto.telefono}
                                            </Typography>
                                        </Grid>

                                    </Grid>

                                    <Box mb={1} p={0}>
                                        <Typography m={0} p={0} sx={{ fontSize: 11 }} color="text.secondary" gutterBottom>
                                            Dirección
                                        </Typography>
                                        <Typography sx={{ fontSize: 17, mb: 0 }} color="text.primary" >
                                            {contacto.direccion}
                                        </Typography>
                                    </Box>
                                    <Box mb={1} p={0}>
                                        <Typography m={0} p={0} sx={{ fontSize: 11 }} color="text.secondary" gutterBottom>
                                            Ciudad
                                        </Typography>
                                        <Typography sx={{ fontSize: 17, mb: 0 }} color="text.primary" >
                                            {contacto.ciudad.nombre}
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}
