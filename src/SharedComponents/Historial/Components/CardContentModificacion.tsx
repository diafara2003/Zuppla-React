import { Grid, Box, Typography, Divider } from '@mui/material'
import React from 'react'
import { AuditoriaGeneralDTO } from '../Model/Historial-Model'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
type props = {
    _detalleAuditoria: AuditoriaGeneralDTO
}
export const CardContentModificacion = ({ _detalleAuditoria }: props) => {
    return (
        <Grid container spacing={1} justifyContent={'space-around'}>
            <Grid item xs={2.9} display={'flex'} alignItems={'center'}>
                <PersonOutlineOutlinedIcon color="primary" />
                <Box ml={1} display={'flex'} alignItems={''} flexDirection={'column'} justifyContent={''} >
                    <Typography variant='subtitle2'>Usuario </Typography>
                    <Typography variant='body1'>{_detalleAuditoria.nameUsuario}</Typography>
                </Box>
            </Grid>
            <Divider orientation="vertical" flexItem />  
            <Grid item xs={2.9} display={'flex'} alignItems={'center'}>
                <CalendarMonthOutlinedIcon color='disabled' />
                <Box ml={1} display={'flex'} alignItems={''} flexDirection={'column'} justifyContent={''} >
                    <Typography variant='subtitle2'>Fecha modificación </Typography>
                    <Typography variant='body1'> {_detalleAuditoria.fecha + ' ' + _detalleAuditoria.hora}</Typography>
                </Box>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item xs={2.9} display={'flex'} alignItems={'center'}>
                <RedoOutlinedIcon color='success' />
                <Box ml={1} display={'flex'} alignItems={''} flexDirection={'column'} justifyContent={''} >
                    <Typography variant='subtitle2'>Valor nuevo </Typography>
                    <Typography variant='body1'>{_detalleAuditoria.valores.new}</Typography>
                </Box>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item xs={2.9} display={'flex'} alignItems={'center'}>
                <UndoOutlinedIcon color="primary" />
                <Box ml={1} display={'flex'} alignItems={''} flexDirection={'column'} justifyContent={''} >
                    <Typography variant='subtitle2'>Valor anterior </Typography>
                    <Typography variant='body1'>{_detalleAuditoria.valores.old}</Typography>
                </Box>
            </Grid>
        </Grid>
    )
}
