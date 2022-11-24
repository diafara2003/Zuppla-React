import { DeleteOutline, EditOutlined, LockOutlined, MailOutline, MoreVert } from '@mui/icons-material';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Switch, Menu, MenuItem, ListItemIcon, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { ActionUser, UsuariosDTO } from '../../../model/usuarioDTO';
import { useTableUsuario } from '../hook/useTableUsuario';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
type typeAction = {
    action: ActionUser;
    userData: UsuariosDTO;
}



type props = {
    filter: string,
    onClick: (data: typeAction) => void
}

export const TableUsuario = ({ onClick, filter }: props) => {


    const { anchorEl, clickAction, clickEstado, handleClick, handleClose, open, state, label } = useTableUsuario({ onClick });
    const [data, setData] = useState(state);

    useEffect(() => {        
         const value = filter.toLowerCase();
         if (value == "") setData(state);
         else setData(state.filter(c =>
             c.nombre.toLowerCase().includes(value)
         ))

    }, [filter,data]);

    return (

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
                    {data.map((row, index) => {
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
                                        <Menu
                                            anchorEl={anchorEl}
                                            id={`tdmenu${row.id}`}
                                            open={open}
                                            onClose={handleClose}
                                            onClick={handleClose}
                                            PaperProps={{
                                                elevation: 0,
                                                sx: {
                                                    width: '214px',
                                                    overflow: 'visible',
                                                    filter: 'drop-shadow(0px 2px 2px rgba(0,0,0,0.22))',
                                                },
                                            }}
                                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                        >
                                            <MenuItem onClick={() => clickAction(ActionUser.Edit)}>
                                                <ListItemIcon >
                                                    <EditOutlined color="primary" />
                                                </ListItemIcon>
                                                <Typography>Editar usuario</Typography>
                                            </MenuItem>

                                            <MenuItem onClick={() => clickAction(ActionUser.Send)}>
                                                <ListItemIcon >
                                                    <MailOutline color="primary" />
                                                </ListItemIcon>
                                                <Typography>Enviar correo</Typography>
                                            </MenuItem>

                                            <MenuItem onClick={() => clickAction(ActionUser.Pass)}>
                                                <ListItemIcon >
                                                    <LockOutlined color="primary" />
                                                </ListItemIcon>
                                                <Typography>Cambiar contrasena</Typography>
                                            </MenuItem>
                                            <MenuItem onClick={() => clickAction(ActionUser.Historial)}>
                                                <ListItemIcon >
                                                    <RestoreOutlinedIcon color="primary" />
                                                </ListItemIcon>
                                                <Typography>Historial</Typography>
                                            </MenuItem>
                                        </Menu>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                </TableBody>
            </Table>

        </TableContainer>
    )
}


export default TableUsuario;