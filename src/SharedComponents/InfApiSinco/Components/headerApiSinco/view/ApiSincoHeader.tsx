import { TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { columnas } from '../../../model/modelInfAPiSinco';

type props = {

    columnas: columnas[];
}

export const ApiSincoHeader = ({ columnas }: props) => {
    return (
        <TableHead >
            <TableRow >
                {columnas.map(c =>
                    <TableCell
                        align={c.align}
                        key={`thead-informe-${c.key}`}                        
                        style={{backgroundColor:'#e8e8e9'}}
                    >
                        <Typography fontWeight={600} variant='subtitle2'>{c.nombre}</Typography>
                    </TableCell>)}
            </TableRow>
        </TableHead>
    )
}
