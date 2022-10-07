import { MoreVert } from '@mui/icons-material';
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@mui/material';
import { DatosNotificacionesDTO } from '../Model/model-DatosContacto'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
type props = {
    datatable: DatosNotificacionesDTO[]
}

export const TableDatosNotLicitaciones = ({ datatable }: props) => {
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
                                    <TableCell key={row.id * 2}>
                                        {row.usuario.nombres}
                                    </TableCell>
                                    <TableCell key={row.id * 2}>
                                        {row.categoria?.nombre}
                                    </TableCell>
                                    <TableCell key={row.id * 2}>
                                        {row.zona}
                                    </TableCell>
                                    <TableCell key={row.id * 2}>
                                        {row.constructora?.nombre}
                                    </TableCell>
                                    <TableCell key={row.id * 2} align="center">
                                        <IconButton edge="end" aria-label="delete">
                                            <DeleteOutlineOutlinedIcon color='primary' />
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
