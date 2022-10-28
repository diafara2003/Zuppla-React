import { DeleteOutline } from "@mui/icons-material";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton, TextField, InputAdornment, TextFieldProps } from "@mui/material";
import { useTableEspecialdiad } from "../hook/useTableEspecialidad";
import { EspecialidadDTO } from "../model/EspecialidadDTO";
import SearchIcon from '@mui/icons-material/Search';
import { useRef } from "react";
import { TransitionGroup } from "react-transition-group";


type props = {
    filter: string
}

export const TableEspecialidad = ({ filter }: props) => {


    // const { state } = useTableEspecialdiad();
    const { data, deleteEspecialidad } = useTableEspecialdiad(filter);


    return (
        <TableContainer sx={{ maxHeight: 440 }}>

            <Table stickyHeader aria-label="sticky table" size="small">
                <TableHead>
                    <TableRow>
                        <TableCell
                            key={"thGrupo"}
                            align={"left"}
                            style={{ fontWeight: 'bold' }}
                        >
                            {"Grupo"} </TableCell>
                        <TableCell
                            key={"thCategoria"}
                            align={"left"}
                            style={{ fontWeight: 'bold' }}
                        >
                            {"Categoría"}
                        </TableCell>
                        <TableCell
                            key={"thDescripción"}
                            align={"left"}
                            style={{ fontWeight: 'bold' }}
                        >
                            {"Descripción"}
                        </TableCell>
                        <TableCell
                            key={"thAcciones"}
                            align={"right"}
                            style={{ fontWeight: 'bold' }}
                        >
                            {"Acciones"}
                        </TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>

                    {data
                        //.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => {
                            return (

                                <TableRow hover role="checkbox" tabIndex={-1} key={`tr${row.id}`}>
                                    <TableCell key={`tdGrupoTexto${row.id}`}>
                                        {row.grupoTexto}
                                    </TableCell>
                                    <TableCell key={`tdCategoriaTexto${row.id}`}>
                                        {row.categoriaTexto}
                                    </TableCell>
                                    <TableCell key={`tdEspecilidadTexto${row.id}`}>
                                        {row.nombre}
                                    </TableCell>
                                    <TableCell key={`tdEliminar${row.id}`} align={"right"}>
                                        <IconButton size="small" onClick={() => deleteEspecialidad(row.id)}>
                                            <DeleteOutline color="primary" />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>

                            );
                        })}

                </TableBody>
            </Table>

        </TableContainer>

    )
}
