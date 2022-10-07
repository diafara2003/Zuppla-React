import { DeleteOutline, EditOutlined, LockOutlined, MailOutline, MoreVert } from '@mui/icons-material';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Switch, Menu, MenuItem, ListItemIcon, Typography } from '@mui/material';
import React, { useState } from 'react'
import { UsuariosDTO } from '../Views/usuario/model/usuarioDTO';

type props = {
    datatable: UsuariosDTO[]
}

export const TableUsuario = ({ datatable }: props) => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


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
                    {datatable
                        //.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => {
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
                                        <Switch {...label} checked={row.estado} size="small" />
                                    </TableCell>
                                    <TableCell key={`tdOpc${row.id}`} align="center">
                                        <IconButton size='small' onClick={handleClick}>
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
                                            <MenuItem>
                                                <ListItemIcon >
                                                    <EditOutlined color="primary" />
                                                </ListItemIcon>
                                                <Typography>Editar usuario</Typography>
                                            </MenuItem>

                                            <MenuItem>
                                                <ListItemIcon >
                                                    <MailOutline color="primary" />
                                                </ListItemIcon>
                                                <Typography>Enviar correo</Typography>
                                            </MenuItem>

                                            <MenuItem>
                                                <ListItemIcon >
                                                    <LockOutlined color="primary" />
                                                </ListItemIcon>
                                                <Typography>Cambiar contrasena</Typography>
                                            </MenuItem>

                                            <MenuItem >
                                                <ListItemIcon >
                                                    <DeleteOutline color="error" />
                                                </ListItemIcon>
                                                <Typography color="error">Eliminar usuario</Typography>
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