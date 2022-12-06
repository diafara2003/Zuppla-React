import { TableBody, TableRow, TableCell, Typography, Box, Link } from "@mui/material";
import { columnas } from '../../../model/modelInfAPiSinco';
import { AES } from 'crypto-js';

type props = {

    columnas: columnas[];
    datos: Object[]
    page: number,
    rowPerPage: number

}

export const ApiSincoBody = ({ columnas, datos, page, rowPerPage }: props) => {
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
                datos.slice(page * rowPerPage, page * rowPerPage + rowPerPage).map(c => (
                    <TableRow hover>
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
    const myPassword = "IntegracionSincoERPADproveedor";
    const getValueObject = (element: any, key: string, formatNumeric: boolean): string => {
        return (formatNumeric ? element[key].toLocaleString("en-EU") : element[key]);
    }

    return (
        columnas.map((c, i) => {
            return <TableCell
                align={c.align}
                key={`tbody-td-informe-${c.key}-${i}`}>
                {c.openLink
                    ? <Link
                        component="button"
                        variant="body2"
                        onClick={() => {
                         
                            const url = 'desarrollo.sincoerp.com/SincoOk/V3';
                            const filter = `NumOC=${(dato as any).NumOc}&Sucursal=-1&Page=OC`;
                            const encryptedURL = AES.encrypt(url, myPassword);
                            const encryptedFilter = AES.encrypt(filter, myPassword);
                            window.open(`https://desarrollo.sincoerp.com/SincoOk/V3/ADPRO/portal/Views/VisorERP/Visor.html?q=${encryptedURL}&f=${encryptedFilter}`,'', 'toolbar=no, top=30, left=100, resizable=no, width=980px, height=780px')
                        }}
                    >
                        {getValueObject(dato, c.key, c.formatoNumerico)}
                    </Link>
                    : getValueObject(dato, c.key, c.formatoNumerico)}

            </TableCell>
        })
    );
}
