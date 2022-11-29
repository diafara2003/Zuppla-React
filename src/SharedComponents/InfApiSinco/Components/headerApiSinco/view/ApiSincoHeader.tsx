import { TableCell, TableHead, TableRow } from '@mui/material'
import { columnas } from '../../../model/modelInfAPiSinco';

type props = {

    columnas: columnas[];
}

export const ApiSincoHeader = ({ columnas }: props) => {
    return (
        <TableHead>
            <TableRow>

                {columnas.map(c =>
                    <TableCell
                        align={c.align}
                        key={`thead-informe-${c.key}`}
                    >{c.nombre}
                    </TableCell>)}
            </TableRow>
        </TableHead>
    )
}
