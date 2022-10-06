import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@mui/material'
import React from 'react'
import { TerCamaraComercioDTO } from '../Model/CamaraComercio'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

type props = {
    datatable: TerCamaraComercioDTO[]
}

export const TableCamaraComercio = ({ datatable }: props) => {
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table" size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell
                                key={"thTipoDoc"}
                                align={"left"}
                                style={{ fontWeight: 'bold' }}
                            >
                                {"Tipo documento"} </TableCell>
                            <TableCell
                                key={"thNumDoc"}
                                align={"left"}
                                style={{ fontWeight: 'bold' }}
                            >
                                {"Numero documento"}
                            </TableCell>
                            <TableCell
                                key={"thNombre"}
                                align={"left"}
                                style={{ fontWeight: 'bold' }}
                            >
                                {"Nombre"}
                            </TableCell>

                            <TableCell
                                key={"thCargo"}
                                align={"left"}
                                style={{ fontWeight: 'bold' }}
                            >
                                {"Cargo"}
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
                        {datatable.map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                    <TableCell key={row.id * 2}>
                                        {row.tipoDocumento}
                                    </TableCell>
                                    <TableCell key={row.id * 2}>
                                        {row.documento}
                                    </TableCell>
                                    <TableCell key={row.id * 2}>
                                        {row.nombre}
                                    </TableCell>
                                    <TableCell key={row.id * 2}>
                                        {row.cargo}
                                    </TableCell>
                                    <TableCell key={row.id * 2} align="center">
                                        <IconButton edge="end" aria-label="delete">
                                            <DeleteForeverIcon sx={{ color: "red" }} />
                                        </IconButton>
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

