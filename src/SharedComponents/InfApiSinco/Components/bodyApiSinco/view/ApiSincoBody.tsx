import { TableBody, TableRow, TableCell, Typography, Box } from "@mui/material";
import { columnas } from '../../../model/modelInfAPiSinco';

type props = {

    columnas: columnas[];
    datos: Object[]
}

export const ApiSincoBody = ({ columnas, datos }: props) => {
    return (
        <TableBody>
            {datos.length == 0 ?
                <TableRow>
                    <TableCell component="th" scope="row" colSpan={columnas.length} align="center">
                        <Box p={5}>
                            <Typography variant="h5" color={"#9c9a9a"} component="h4">Sin información</Typography>
                        </Box>
                    </TableCell>
                </TableRow>
                :
                datos.map(c => (
                    <TableRow>
                        {renderizarTd({ columnas: columnas, dato: c })}
                    </TableRow>
                ))
            }
        </TableBody>
    )
}

type props1 = {
    columnas: columnas[];
    dato: Object
}

const renderizarTd = ({ columnas, dato }: props1) => {
    
    const getValueObject = (element: any, key: string, formatNumeric:boolean): string => {    
        return (formatNumeric ? element[key].toLocaleString("en-EU"):element[key]);
    }   

    return (
        columnas.map(c => {
            return <TableCell
                align={c.align}
                key={`tbody-td-informe-${c.key}`}>
                {getValueObject(dato, c.key, c.formatoNumerico)}
            </TableCell>
        })
    );
}
