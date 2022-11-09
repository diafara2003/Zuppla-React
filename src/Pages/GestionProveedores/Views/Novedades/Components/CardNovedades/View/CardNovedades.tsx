import { CheckBox } from '@mui/icons-material'
import { CardContent, Typography, CardActions, Button, Card, CardHeader, Grid, Divider, Box, Radio, Tooltip, Checkbox } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { NovedadDTO } from '../../../Model/Novedades-Model'
import { ListDocFaltante } from './ListDocFaltante'
import { ListFrmFaltante } from './ListFrmFaltante'
type props = {
    novedad: NovedadDTO
}
export const CardNovedades = ({ novedad }: props) => {

    const cantidadDocFaltante = novedad.detalle?.find(ele => ele.tipo == "documento");
    const cantidadFrmFaltante = novedad.detalle?.find(ele => ele.tipo == "formulario");
    const _backgroundColor = novedad.isActiva ?'rgba(30, 98, 161, 0.04);' :"#e8e8e8";
  
    return (
        <Card variant="outlined" sx={{ backgroundColor: _backgroundColor }}>
            <CardContent >
                <Grid container>
                    <Grid display={'flex'}
                        justifyContent="center"
                        alignItems="center" item xs={1}>
                        <Box
                            display={'flex'}
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Tooltip children={novedad.isActiva ?  <Checkbox color='success'   /> :
                                                 <Checkbox color='success' disabled defaultChecked  />} title="Finalizar novedad"></Tooltip>
                        </Box>

                    </Grid>
                    <Grid item xs={11}>
                        {/* <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="flex-start"
                            spacing={0.5}
                            mb={1}
                        >
                            <Typography variant='h6'>Novedad N° 1</Typography>
                            <Typography variant='subtitle2'>{new Date(novedad.fecha).toLocaleDateString()}</Typography>
                        </Stack>
                        <Divider />                         */}
                        <Grid container spacing={1}>
                            <Grid item xs={5.9}>
                                <Typography mb={0.5} variant='subtitle2' fontSize={"14px"} fontWeight={500}>Observaciones</Typography>
                                <Typography variant='body1' fontWeight={400}>{novedad.comentario}</Typography>
                            </Grid>
                            <Divider orientation="vertical" flexItem />
                            <Grid item xs={5.9}>
                                <Typography mb={0.5} variant='subtitle2' fontSize={"14px"} fontWeight={500}>Motivos del rechazo</Typography>
                                <Grid container>
                                    <Grid item xs={6}>
                                        {cantidadFrmFaltante != undefined ?
                                            <>
                                                <Typography mb={0.5} variant='subtitle2' fontSize={"14px"} fontWeight={500}>Formularios faltantes</Typography>
                                                <ListFrmFaltante detalle={novedad.detalle!} />
                                            </>
                                            : null
                                        }
                                    </Grid>
                                    <Grid item xs={6}>
                                        {cantidadDocFaltante != undefined ?
                                            <>
                                                <Typography mb={0.5} variant='subtitle2' fontSize={"14px"} fontWeight={500}>Documentos faltantes</Typography>
                                                <ListDocFaltante detalle={novedad.detalle!} />
                                            </>
                                            : null
                                        }
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </CardContent>
            <CardActions>
                {/* <Typography variant='subtitle2'>{new Date(novedad.fecha).toLocaleDateString()}</Typography> */}
            </CardActions>

        </Card>

    )
}
