import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material"
import PermDeviceInformationIcon from '@mui/icons-material/PermDeviceInformation';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { HeaderComponent } from "../../../../../SharedComponents/Header";
export const CamaraComercioPage = () => {
    return (
        <>
         <HeaderComponent title={"Camara y comercio"} />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Tipo documento</TableCell>
                            <TableCell align="center">Numero de documento</TableCell>
                            <TableCell align="center">Nombre completo)</TableCell>
                            <TableCell align="center">Cargo</TableCell>
                            <TableCell align="center"><PermDeviceInformationIcon /></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align="center">Cedula de ciudadania</TableCell>
                            <TableCell align="center">1234567</TableCell>
                            <TableCell align="center">Pruebas 2022</TableCell>
                            <TableCell align="center">Developer</TableCell>
                            <TableCell align="center">
                                <IconButton edge="end" aria-label="delete">
                                    <DeleteForeverIcon sx={{ color: 'red' }} />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell ><TextField label="Cedula de ciudadania" variant="standard" /> </TableCell>
                            <TableCell align="center"> <TextField id="standard-basic" label="Numero de documento" variant="standard" /> </TableCell>
                            <TableCell align="center"><TextField id="standard-basic" label="Nombre completo" variant="standard" /></TableCell>
                            <TableCell align="center"><TextField id="standard-basic" label="Cargo" variant="standard" /></TableCell>
                            <TableCell align="center">
                                <IconButton edge="end" aria-label="add">
                                    <AddBoxIcon sx={{ color: 'green' }} />
                                </IconButton>
                            </TableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>
        </>

    )

}