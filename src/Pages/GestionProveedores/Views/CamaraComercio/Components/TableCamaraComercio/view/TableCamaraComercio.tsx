import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@mui/material'
import { TerCamaraComercioDTO } from '../../../Model/CamaraComercio'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

type props = {
    datatable: TerCamaraComercioDTO[],
    onDelete: (valorId: number) => void
}

export const TableCamaraComercio = ({ datatable, onDelete }: props) => {
    const clickAction = (camaraSelect: TerCamaraComercioDTO) => {
        onDelete(camaraSelect.id);
    };
    return (
        <>
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
                                    <TableCell >
                                        {row.tipoDocumento}
                                    </TableCell>
                                    <TableCell >
                                        {row.documento}
                                    </TableCell>
                                    <TableCell >
                                        {row.nombre}
                                    </TableCell>
                                    <TableCell >
                                        {row.cargo}
                                    </TableCell>
                                    <TableCell align="center">
                                        <IconButton edge="end" onClick={() => clickAction(row)} aria-label="delete">
                                            <DeleteOutlineOutlinedIcon color="primary" />
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
        </>
    )
}

