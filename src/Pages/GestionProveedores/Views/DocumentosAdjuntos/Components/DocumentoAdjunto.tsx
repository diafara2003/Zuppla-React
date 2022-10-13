import { Input } from '@mui/icons-material'
import { Box, Button, Divider, Grid, IconButton, Typography, Tooltip } from '@mui/material'
import React from 'react'
import { AdjuntosDTO, AdjuntoTerceroDTO } from '../Model/AdjuntosDTO'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import InfoIcon from '@mui/icons-material/Info';
import DoneIcon from '@mui/icons-material/Done';

type props = {
    dataAdjunto: AdjuntoTerceroDTO
}

export const DocumentoAdjunto = ({ dataAdjunto }: props) => {
    let _title = dataAdjunto.tipoAdjunto.nombre.split('(')[0]
    let _info = dataAdjunto.tipoAdjunto.nombre.split('(')[1]?.replace(')', '')    
    return (
        <Box sx={{ flexGrow: 1, overflow: '', px: 3}} >
            <Box display={'flex'}>
                <Typography noWrap variant='subtitle1' fontWeight={600} fontSize={14}> {_title}</Typography>
                {
                    _info != undefined ? <Tooltip children={<InfoIcon sx={{ ml: 1 }} color='primary' />} title={_info}></Tooltip> : ''
                }
            </Box>
            <Grid mt={1} container columnSpacing={{ xs: 1 }}>
                <Grid item xs={8} mt={1}>
                    {
                        dataAdjunto.adjunto.nombre == ''
                            ? <Typography color={'gray'} variant='subtitle2'> Seleccione un archivo... </Typography>
                            : <Box display={'flex'}> <Typography noWrap variant='subtitle2'> {dataAdjunto.adjunto.nombre}</Typography>
                                <DoneIcon sx={{ ml: 1 }} color='success' />
                            </Box>
                    }
                </Grid>
                <Grid item xs={3}>
                    <Button variant="outlined" component="label" startIcon={<FileUploadOutlinedIcon color='primary' />}>
                        Cargar
                        <input hidden multiple type="file" />
                    </Button>
                </Grid>
                <Grid item xs={1}>
                    <IconButton color="primary" aria-label="upload picture" component="label">
                        <FileDownloadOutlinedIcon color='success' />
                    </IconButton>
                </Grid>

            </Grid>
        </Box>
        //  <Divider  orientation='vertical'/>        
    )
}
