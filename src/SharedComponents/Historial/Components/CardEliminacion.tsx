import { Card, CardHeader, Typography, CardContent, Grid, Box, Divider, CardActions, Button } from '@mui/material'
import React from 'react'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { AuditoriaGeneralDTO } from '../Model/Historial-Model';
import { CardContentEliminar } from './CardContentEliminar';
type props = {
    auditoria: AuditoriaGeneralDTO
}
export const CardEliminacion = ({ auditoria }: props) => {
    return (
        <Card variant="outlined" sx={{ backgroundColor: 'rgb(255 228 228 / 12%)' }}>
            <CardHeader
                title={
                    <Typography fontWeight={600} color={''}>{auditoria.glosario.nombreHTML}</Typography>
                }
                action={
                    <Button variant="text" color='inherit' endIcon={<KeyboardArrowDownOutlinedIcon color='inherit' />}>
                        Ver más
                    </Button>
                }>
            </CardHeader>
            <Divider orientation="horizontal" flexItem />
            <CardContent>
                <CardContentEliminar _detalleAuditoria={auditoria} />
            </CardContent>           
        </Card>
    )
}
