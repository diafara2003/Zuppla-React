import { TableBody, TableRow, TableCell, Typography, Box } from "@mui/material";
import { columnas } from '../../../model/modelInfAPiSinco';

type props = {

    columnas: columnas[];
    datos: Object[]
}

export const ApiSincoBody = ({ columnas, datos }: props) => {
    return (
        <TableBody>
            <TableRow>
                {datos.length == 0 ? <TableCell component="th" scope="row" colSpan={columnas.length} align="center">
                    <Box p={5}>
                        <Typography variant="h5" color={"#9c9a9a"} component="h4">Sin información</Typography>
                    </Box>
                </TableCell>
                    :
                    datos.map(c => (
                        <TableRow>
                            {rendezarTd({ columnas: columnas, dato: c })}
                        </TableRow>

                    ))
                }

            </TableRow>
        </TableBody>
    )
}

type props1 = {

    columnas: columnas[];
    dato: Object
}


const rendezarTd = ({ columnas, dato }: props1) => {
    const getValueObject = (element: any, key: string): string => {

        const _point = key.split('.');

        if (_point.length == 1) return element[key];
        else {
            let filter = '';
            _point.forEach(point => {
                filter += `["${point}"]`;
            });
            return eval("element" + filter);
        }
    }


    //   const   renderStyle =(value: any, properties: columnas): string =>{


    //         if (value == null) return "";

    //         else if (properties.formatoNumerico) return new Formatnumeric().ToNumber((value as number), 2, false, "");
    //         else return value;
    //     }


    return (

        columnas.map(c => {

            return <TableCell
                align={c.align}
                key={`tbody-td-informe-${c.key}`}
            >{getValueObject(dato, c.key)}
            </TableCell>
        })
    );
}
