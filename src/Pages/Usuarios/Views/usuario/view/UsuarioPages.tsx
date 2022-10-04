import { Box, Button, InputAdornment, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField } from '@mui/material'
import React from 'react'
import { HeaderComponent } from '../../../../../SharedComponents/Header'
import SearchIcon from '@mui/icons-material/Search';
import { Add, MasksRounded, MoreVert } from '@mui/icons-material';
import HistoryIcon from '@mui/icons-material/History';
import { useUsuario } from '../hook/useUsuario';
export const UsuarioPages = () => {

    const { data, isLoading } = useUsuario();
    return (

        <>
            <HeaderComponent title={"Usuarios"} />

            <Box>

                <Box display={"flex"} justifyContent={"end"} pt={"10px"}>

                    <TextField
                        id="outlined-basic"
                        size='small'
                        placeholder='Buscar...'
                        sx={{ width: "400px" }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                        label="Buscar..." variant="outlined" />
                    <Button sx={{ ml: "20px" }} variant="text" > <Add sx={{ mr: "8px" }} />Agregar usuario</Button>
                    <Button variant="text" > <HistoryIcon sx={{ mr: "8px" }} />Historial</Button>
                </Box>


                <Box m={"10px"} mt={"25px"}>
                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        <TableContainer sx={{ maxHeight: 440 }}>
                            <Table stickyHeader aria-label="sticky table" size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell
                                            key={"thNombre"}
                                            align={"left"}
                                            style={{ fontWeight: 'bold' }}
                                        >
                                            {"Nombre"} </TableCell>
                                        <TableCell
                                            key={"thDocumento"}
                                            align={"left"}
                                            style={{ fontWeight: 'bold' }}
                                        >
                                            {"Documento"}
                                        </TableCell>
                                        <TableCell
                                            key={"thcargo"}
                                            align={"left"}
                                            style={{ fontWeight: 'bold' }}
                                        >
                                            {"Cargo"}
                                        </TableCell>

                                        <TableCell
                                            key={"thcorreo"}
                                            align={"left"}
                                            style={{ fontWeight: 'bold' }}
                                        >
                                            {"Correo"}
                                        </TableCell>

                                        <TableCell
                                            key={"thCelular"}
                                            align={"left"}
                                            style={{ fontWeight: 'bold' }}
                                        >
                                            {"Celular"}
                                        </TableCell>
                                        <TableCell
                                            key={"thEstado"}
                                            align={"left"}
                                            style={{ fontWeight: 'bold' }}
                                        >
                                            {"Estado"}
                                        </TableCell>
                                        <TableCell
                                            key={"thAcciones"}
                                            align={"center"}
                                            style={{ fontWeight: 'bold' }}
                                        >
                                            {"Acciones"}
                                        </TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data == null ? null : data
                                        //.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row) => {
                                            return (
                                                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                                    <TableCell key={row.id * 2}>
                                                        {row.nombre}
                                                    </TableCell>
                                                    <TableCell key={row.id * 2}>
                                                        {row.documento}
                                                    </TableCell>
                                                    <TableCell key={row.id * 2}>
                                                        {row.cargo}
                                                    </TableCell>
                                                    <TableCell key={row.id * 2}>
                                                        {row.correo}
                                                    </TableCell>
                                                    <TableCell key={row.id * 2}>
                                                        {row.celular}
                                                    </TableCell>
                                                    <TableCell key={row.id * 2}>
                                                        {row.estado}
                                                    </TableCell>
                                                    <TableCell key={row.id * 2} align="center">
                                                        <MoreVert />
                                                    </TableCell>
                                                </TableRow>
                                            );
                                        })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        {/* <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        /> */}
                    </Paper>
                </Box>

            </Box>
        </>
    )
}
