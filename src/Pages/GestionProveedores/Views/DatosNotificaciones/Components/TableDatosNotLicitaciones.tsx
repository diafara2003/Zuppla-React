import { MoreVert } from '@mui/icons-material';
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@mui/material';
import { DatosNotificacionesDTO } from '../Model/model-DatosContacto'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
type props = {
    datatable: DatosNotificacionesDTO[],
    valorDelete: (value:number) => void
}

export const TableDatosNotLicitaciones = ({ datatable, valorDelete }: props) => {
    const clickDelete = (val:number) => {
        valorDelete(val);
    };
    return (
        // <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <>
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
                                key={"thCategoria"}
                                align={"left"}
                                style={{ fontWeight: 'bold' }}
                            >
                                {"Categoria"}
                            </TableCell>
                            <TableCell
                                key={"thZona"}
                                align={"left"}
                                style={{ fontWeight: 'bold' }}
                            >
                                {"Zona"}
                            </TableCell>

                            <TableCell
                                key={"thConstructora"}
                                align={"left"}
                                style={{ fontWeight: 'bold' }}
                            >
                                {"Constructora"}
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
                                    <TableCell>
                                        {row.usuario.nombres}
                                    </TableCell>
                                    <TableCell >
                                        {row.categoria?.nombre}
                                    </TableCell>
                                    <TableCell >
                                        {row.zona}
                                    </TableCell>
                                    <TableCell >
                                        {row.constructora?.nombre}
                                    </TableCell>
                                    <TableCell  align="center">
                                        <IconButton onClick={() => clickDelete(row.id)} edge="end" aria-label="delete">
                                            <DeleteOutlineOutlinedIcon  color='primary' />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>


        // </Paper>
    )
}
