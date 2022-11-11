import { Grid, Box, Typography, Divider } from '@mui/material'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import React from 'react'
import { AuditoriaGeneralDTO } from '../Model/Historial-Model';
type props = {
    _detalleAuditoria: AuditoriaGeneralDTO
}
export const CardContentEliminar = ({ _detalleAuditoria }: props) => {
    return (
        <Grid container spacing={1} justifyContent={'space-around'}>
            <Grid item xs={3} display={'flex'} alignItems={'center'}>
                <PersonOutlineOutlinedIcon color="error" />
                <Box ml={1} display={'flex'} alignItems={''} flexDirection={'column'} justifyContent={''} >
                    <Typography variant='subtitle2'>Usuario </Typography>
                    <Typography variant='body1'>{_detalleAuditoria.nameUsuario}</Typography>
                </Box>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item xs={3} display={'flex'} alignItems={'center'}>
                <DeleteOutlineOutlinedIcon color="error" />
                <Box ml={1} display={'flex'} alignItems={''} flexDirection={'column'} justifyContent={''} >
                    <Typography variant='subtitle2'>Valor eliminado </Typography>
                    <Typography variant='body1'>{_detalleAuditoria.valores.old}</Typography>
                </Box>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item xs={3} display={'flex'} alignItems={'center'}>
                <CalendarMonthOutlinedIcon color='disabled' />
                <Box ml={1} display={'flex'} alignItems={''} flexDirection={'column'} justifyContent={''} >
                    <Typography variant='subtitle2'>Fecha de eliminación </Typography>
                    <Typography variant='body1'> {_detalleAuditoria.fecha + ' ' + _detalleAuditoria.hora}</Typography>
                </Box>
            </Grid>
        </Grid>
    )
}
