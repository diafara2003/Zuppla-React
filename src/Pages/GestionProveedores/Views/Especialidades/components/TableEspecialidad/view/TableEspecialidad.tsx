import { DeleteOutline } from "@mui/icons-material";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from "@mui/material";
import { useTableEspecialdiad } from "../hook/useTableEspecialidad";
import { EspecialidadDTO } from "../model/EspecialidadDTO";
import { SkeletonDinamic } from '../../../../../Components/SkeletonComp/View/SkeletonDinamic';
import { useContext } from "react";
import { EspecialidadContext } from "../../../store";

type props = {
    datatable: EspecialidadDTO[]
}

export const TableEspecialidad = () => {

    // const { state } = useTableEspecialdiad();
    const { state } = useContext(EspecialidadContext);
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
                    {state
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
                                        <IconButton size="small">
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
