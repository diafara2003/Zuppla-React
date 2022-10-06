import { MoreVert } from '@mui/icons-material';
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { DatosNotificacionesDTO } from '../Model/model-DatosContacto'

type props = {
    datatable: DatosNotificacionesDTO[]
}

export const TableDatosNotificaciones = ({ datatable }: props) => {
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
                                {"Nombres"} </TableCell>
                            <TableCell
                                key={"thCargo"}
                                align={"left"}
                                style={{ fontWeight: 'bold' }}
                            >
                                {"Cargo"}
                            </TableCell>
                            <TableCell
                                key={"thCorreo"}
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
                                            {row.usuario.nombres}
                                        </TableCell>
                                        <TableCell key={row.id * 2}>
                                            {row.usuario.cargo}
                                        </TableCell>
                                        <TableCell key={row.id * 2}>
                                            {row.usuario.correo}
                                        </TableCell>
                                        <TableCell key={row.id * 2}>
                                            {row.usuario.celular}
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
