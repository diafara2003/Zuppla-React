import { MoreVert } from '@mui/icons-material';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Switch } from '@mui/material';
import { ActionUser, UsuariosDTO } from '../../../model/usuarioDTO';
import { useTableUsuario } from '../hook/useTableUsuario';
import { MenuOption } from '../../MenuUserOption';
type typeAction = {
    action: ActionUser;
    userData: UsuariosDTO;
}

type props = {
    filter: string,
    onClick: (data: typeAction) => void
}

export const TableUsuario = ({ onClick, filter }: props) => {

    const { clickAction, clickEstado, handleClick, selectedId, state, label, eventClick } = useTableUsuario({ onClick });

    return (
        <>
            <TableContainer>
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
                        {state
                            .filter(c => c.nombre.toLowerCase().includes(filter.toLowerCase()))
                            .map((row, index) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={`tr${row.id}`}>
                                        <TableCell key={`tdNom${row.id}`}>
                                            {row.nombre}
                                        </TableCell>
                                        <TableCell key={`tdDoc${row.id}`}>
                                            {row.documento}
                                        </TableCell>
                                        <TableCell key={`tdCar${row.id}`}>
                                            {row.cargo}
                                        </TableCell>
                                        <TableCell key={`tdCor${row.id}`}>
                                            {row.correo}
                                        </TableCell>
                                        <TableCell key={`tdCel${row.id}`}>
                                            {row.celular}
                                        </TableCell>
                                        <TableCell key={`tdSwi${row.id}`}>
                                            <Switch {...label}
                                                checked={row.estado == 1 ? true : false}
                                                onChange={(event) => clickEstado(event, row, index)}
                                                size="small" />
                                        </TableCell>
                                        <TableCell key={`tdOpc${row.id}`} align="center">
                                            <IconButton size='small' onClick={(event) => handleClick(event, row)}>
                                                <MoreVert sx={{ color: "#1E62A1" }} />
                                            </IconButton>

                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            {eventClick == null ? null : <MenuOption event={eventClick} opSelected={clickAction} />}
        </>
    )


}


export default TableUsuario;