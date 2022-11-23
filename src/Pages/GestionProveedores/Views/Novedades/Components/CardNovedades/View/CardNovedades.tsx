import { CardContent, Typography, CardActions, Card, CardHeader, Grid, Divider, Box,  Tooltip, Checkbox } from '@mui/material'
import { Stack } from '@mui/system'
import { NovedadDTO } from '../../../Model/Novedades-Model'
import { ListDocFaltante } from './ListDocFaltante'
import { ListFrmFaltante } from './ListFrmFaltante'

type props = {
    novedad: NovedadDTO,
    numNovedad: number,
    clickFinaliza: (numeroNovedad: number) => void

}
export const CardNovedades = ({ novedad, numNovedad, clickFinaliza }: props) => {

    const cantidadDocFaltante = novedad.detalle?.find(ele => ele.tipo == "documento");
    const cantidadFrmFaltante = novedad.detalle?.find(ele => ele.tipo == "formulario");
    const _backgroundColor = novedad.isActiva ? 'rgba(30, 98, 161, 0.04);' : "#e8e8e8";
    const finalizarNovedad = (_numberNov: number) => {
    
        clickFinaliza(_numberNov);
    }

    if(novedad.ischecked==undefined)novedad.ischecked=false;

    return (
        <Card variant="outlined" sx={{ backgroundColor: _backgroundColor }}>
            <CardHeader
                title={
                    <Typography fontWeight={600} color={'primary'}>Novedad N° {numNovedad}</Typography>
                }
                action={
                    <Typography variant='subtitle2' color={'primary'} mt={1} mr={1}>{new Date(novedad.fecha).toLocaleDateString()} </Typography>
                }
                sx={{ margin: '2px 6px !important', padding: '2px 6px !important' }}>
            </CardHeader >
            <Divider orientation="horizontal" flexItem />
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
                            <Tooltip children={
                                novedad.isActiva
                                    ?
                                    <Checkbox checked={novedad.ischecked} color='success' onClick={() => finalizarNovedad(novedad.numero)} />
                                    :
                                    <Checkbox color='success' disabled defaultChecked />} title="Finalizar novedad"></Tooltip>
                        </Box>
                    </Grid>
                    <Grid item xs={11}>
                        <Box>
                            <Typography mb={0.5} variant='subtitle2' fontSize={"14px"} fontWeight={600}>Observaciones</Typography>
                            <Typography variant='body1' fontWeight={400}>{novedad.comentario}</Typography>
                        </Box>
                        <Stack mt={2}>
                            <Typography mb={0.5} variant='subtitle2' fontSize={"14px"} fontWeight={600}>Motivos del rechazo</Typography>
                            {/* <LoadingButton variant="text"
                                endIcon={<KeyboardArrowDownIcon color='inherit' />}
                                loading={false}
                                loadingPosition="end"
                                color='inherit'
                            >
                                Motivos del rechazo
                            </LoadingButton> */}

                            <Grid container mt={1}>
                                <Box width={'100%'}>
                                    {cantidadFrmFaltante != undefined ?
                                        <>
                                            {/* <Typography mb={0.5} variant='subtitle2' fontSize={"14px"} fontWeight={500}>Formularios faltantes </Typography> */}
                                            <ListFrmFaltante detalle={novedad.detalle!} />
                                        </>
                                        : null
                                    }
                                </Box>
                                <Box width={'100%'}>
                                    {cantidadDocFaltante != undefined ?
                                        <>
                                            {/* <Typography mb={0.5} variant='subtitle2' fontSize={"14px"} fontWeight={500}>Documentos faltantes</Typography> */}
                                            <ListDocFaltante detalle={novedad.detalle!} />
                                        </>
                                        : null
                                    }
                                </Box>
                            </Grid>
                        </Stack>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                {/* <Typography variant='subtitle2'>{new Date(novedad.fecha).toLocaleDateString()} </Typography> */}
            </CardActions>

        </Card>

    )
}
