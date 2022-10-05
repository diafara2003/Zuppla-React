import { MoreVert } from '@mui/icons-material';
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import React from 'react'
import { UsuariosDTO } from '../../../model/usuarioDTO';

type props = {
    datatable: UsuariosDTO[]
}

export const LstUsuarios = ({ datatable }: props) => {
    return (
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
                        {datatable
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
                                            <MoreVert sx={{ color: "#1E62A1" }}/>
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
    )
}


export default LstUsuarios;