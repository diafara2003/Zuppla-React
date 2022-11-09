import { Typography } from '@mui/material'
import React from 'react'
import { NovedadesDetDTO } from '../../../Model/Novedades-Model'
type props = {
    detalle: NovedadesDetDTO[]
}
export const ListDocFaltante = ({ detalle }: props) => {
    return (
        <ul>
            {
                detalle?.map(({ tipo, nombre }) => {
                    if (tipo == 'documento') {
                        return (
                            <li>
                                <Typography variant='body1'>{nombre}</Typography>
                            </li>)
                    }
                })
            }
        </ul>
    )
}


