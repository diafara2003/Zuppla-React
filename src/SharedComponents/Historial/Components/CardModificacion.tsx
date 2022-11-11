import { Card, CardHeader, Typography, CardContent, Grid, Box, Divider, CardActions, Button } from '@mui/material'
import React from 'react'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import { AuditoriaGeneralDTO } from '../Model/Historial-Model';
import { CardContentModificacion } from './CardContentModificacion';
type props = {
    auditoria: AuditoriaGeneralDTO
}

export const CardModificacion = ({ auditoria }: props) => {

    return (
        <Card variant="outlined" sx={{ backgroundColor: '#FBFBFB' }}>
            <CardHeader
                title={
                    <Typography fontWeight={600} color={'primary'}>{auditoria.glosario.nombreHTML}</Typography>
                }
                action={
                    <Button variant="text" endIcon={<KeyboardArrowDownOutlinedIcon color='primary' />}>
                    Ver más
                </Button>
                }>
            </CardHeader>
            <Divider orientation="horizontal" flexItem />
            <CardContent>
              <CardContentModificacion _detalleAuditoria={auditoria} />
            </CardContent>
           
        </Card>
    )
}
