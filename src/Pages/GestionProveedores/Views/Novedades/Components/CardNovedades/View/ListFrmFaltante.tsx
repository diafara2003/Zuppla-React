import { Box, Typography } from '@mui/material'
import {  NovedadesDetDTO } from '../../../Model/Novedades-Model'
type props = {
    detalle: NovedadesDetDTO[]
}
export const ListFrmFaltante = ({ detalle }: props) => {
    const formatter = new Intl.ListFormat('es');
    let arrayFrm: string[] = []    
    const extraeFrm = () =>{
        detalle?.map(({ tipo, nombre }) => {
            if (tipo == 'formulario') {                       
                arrayFrm.push(nombre.split('(')[0])                       
            }
        })
    }
    extraeFrm();
    return (
        
        <Box justifyContent={'flex-start'} display={'flex'}>
            <Typography mb={0.5} variant='body1' color={'primary'} fontSize={"14px"} fontWeight={500}>Formularios faltantes: </Typography>           
            <Typography variant='subtitle2'>{formatter.format(arrayFrm)}</Typography>
        </Box>
    )
}
