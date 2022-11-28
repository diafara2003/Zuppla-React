import { TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'

export const ApiSincoHeader = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell>Orden de compra</TableCell>
                <TableCell align="right">Fecha generación</TableCell>
                <TableCell align="right">Fecha máxima de entrega</TableCell>
                <TableCell align="right">Valor</TableCell>
                <TableCell align="right">% de entrega</TableCell>
                <TableCell align="right">Estado</TableCell>
                <TableCell align="right">Detalle</TableCell>
            </TableRow>
        </TableHead>
    )
}
