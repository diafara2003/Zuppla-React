import { Typography } from '@mui/material'
import React from 'react'
import { NovedadDTO, NovedadesDetDTO } from '../../../Model/Novedades-Model'
type props = {
    detalle: NovedadesDetDTO[]
}
export const ListFrmFaltante = ({ detalle }: props) => {
    return (
        <ul>
            {
                detalle?.map(({ tipo, nombre }) => {
                    if (tipo == 'formulario') {
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
