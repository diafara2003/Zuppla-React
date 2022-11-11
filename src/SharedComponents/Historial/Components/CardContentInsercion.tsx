import { Grid, Box, Typography, Divider } from '@mui/material'
import React from 'react'
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import { AuditoriaGeneralDTO } from '../Model/Historial-Model';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
type props ={
    detalleAudit:AuditoriaGeneralDTO
}
export const CardContentInsercion = ({detalleAudit}:props) => {
  return (
    <Grid container spacing={1} justifyContent={'space-around'}>
        <Grid item xs={3} display={'flex'} alignItems={'center'}>
        <PersonOutlineOutlinedIcon color="success" />
        <Box ml={1} display={'flex'} alignItems={''} flexDirection={'column'} justifyContent={''} >
            <Typography variant='subtitle2'>Usuario </Typography>
            <Typography variant='body1'>{detalleAudit.nameUsuario}</Typography>
        </Box>
    </Grid>
    <Divider orientation="vertical" flexItem />
    <Grid item xs={3} display={'flex'} alignItems={'center'}>
        <AddTaskOutlinedIcon color="success" />
        <Box ml={1} display={'flex'} alignItems={''} flexDirection={'column'} justifyContent={''} >
            <Typography variant='subtitle2'>Valor agregado </Typography>
            <Typography variant='body1'>{detalleAudit.valores.new}</Typography>
        </Box>
    </Grid>
    <Divider orientation="vertical" flexItem />
    <Grid item xs={3} display={'flex'} alignItems={'center'}>
        <CalendarMonthOutlinedIcon color='disabled' />
        <Box ml={1} display={'flex'} alignItems={''} flexDirection={'column'} justifyContent={''} >
            <Typography variant='subtitle2'>Fecha de inserción </Typography>
            <Typography variant='body1'> {detalleAudit.fecha + ' ' + detalleAudit.hora}</Typography>
        </Box>
    </Grid>
</Grid>
  )
}
