import { TableBody, TableRow, TableCell, Typography, Box } from "@mui/material";
import { columnas } from "../../../model/modelInfAPiSinco";

type props = {

    columnas: columnas[];
    datos: Object[]
}

export const ApiSincoBody = ({ columnas, datos }: props) => {
    return (
        <TableBody>
            <TableRow>
                <TableCell component="th" scope="row" colSpan={columnas.length} align="center">
                    <Box p={5}>
                        <Typography variant="h5" color={"#9c9a9a"} component="h4">Sin información</Typography>
                    </Box>
                </TableCell>
            </TableRow>
        </TableBody>
    )
}
