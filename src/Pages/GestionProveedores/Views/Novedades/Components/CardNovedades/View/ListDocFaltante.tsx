import { Box, Typography } from '@mui/material'
import { NovedadesDetDTO } from '../../../Model/Novedades-Model'
type props = {
    detalle: NovedadesDetDTO[]
}
export const ListDocFaltante = ({ detalle }: props) => {
    const formatter = new Intl.ListFormat('es');
    let arrayDoc: string[] = []
    const extraeDoc = () =>{
        detalle?.map(({ tipo, nombre }) => {
            if (tipo == 'documento') {
                arrayDoc.push(nombre.split('(')[0])
            }
        })
    }
    extraeDoc();

    return (
        <Box justifyContent={'flex-start'} display={'flex'}>
            <Typography mb={0.5} variant='body1' color={'primary'} fontSize={"14px"} fontWeight={500}>Documentos faltantes: </Typography>           
            <Typography variant='subtitle2'>{formatter.format(arrayDoc)}</Typography>
        </Box>
    )
}


