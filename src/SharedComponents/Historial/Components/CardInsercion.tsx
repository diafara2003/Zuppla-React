import { Card, CardHeader, Typography, CardContent, Grid, Box, Divider, CardActions, Button } from '@mui/material'
import React from 'react'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import { AuditoriaGeneralDTO } from '../Model/Historial-Model';
import { CardContentInsercion } from './CardContentInsercion';
type props = {
    auditoria: AuditoriaGeneralDTO
}
export const CardInsercion = ({ auditoria }: props) => {
    return (
        <Card variant="outlined" sx={{ backgroundColor: '#d8ffd826 !important' }}>
            <CardHeader
                title={
                    <Typography fontWeight={600} color={''}>{auditoria.glosario.nombreHTML}</Typography>
                }
                action={
                    <Button variant="text" color='success' endIcon={<KeyboardArrowDownOutlinedIcon color='success' />}>
                        Ver más
                    </Button>
                }>
            </CardHeader>
            <Divider orientation="horizontal" flexItem />
            <CardContent>
                <CardContentInsercion detalleAudit={auditoria} />

            </CardContent>

        </Card>
    )
}
