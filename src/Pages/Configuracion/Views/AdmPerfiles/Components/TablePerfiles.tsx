import { MoreVert, EditOutlined, MailOutline, LockOutlined } from '@mui/icons-material';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Switch, IconButton, Menu, MenuItem, ListItemIcon, Typography } from '@mui/material';
import React, { useState } from 'react'
import { ActionPerfil, PerfilConsultaDTO } from '../Model/AdmPerfil-Model';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
type typeAction = {
    action: ActionPerfil,
    perfilData: PerfilConsultaDTO;
}

type props = {
    dataTable: PerfilConsultaDTO[],
    onClick: (data: typeAction) => void
}

export const TablePerfiles = ({ dataTable, onClick }: props) => {

    
    const [userPerfilSelect, setUserPerfilSelect] = useState<PerfilConsultaDTO>()

    const clickEstado = (event: React.ChangeEvent<HTMLInputElement>, perfil: PerfilConsultaDTO, _index: number) => {
        perfil.estado = event.target.checked;
        
        event.target.checked == true ?
            onClick({ action: ActionPerfil.EstadoTrue, perfilData: perfil! })
            :
            onClick({ action: ActionPerfil.EstadoFalse, perfilData: perfil! });
    }

    const clickAction = (_action: ActionPerfil) => {
        onClick({ action: _action, perfilData: userPerfilSelect! });
    }

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClose = () => {
        setAnchorEl(null);
    };


    const handleClick = (event: React.MouseEvent<HTMLElement>, _Pefil: PerfilConsultaDTO) => {
        setAnchorEl(event.currentTarget);
        setUserPerfilSelect(_Pefil);
        onClick({ action: ActionPerfil.Default, perfilData: _Pefil })
    };
    return (
        <TableContainer>
            <Table stickyHeader aria-label="sticky table" size="small">
                <TableHead>
                    <TableRow>
                        <TableCell
                            key={"thNombre"}
                            align={"left"}
                            style={{ fontWeight: 'bold' }}
                        >
                            {"Nombre perfil"} </TableCell>
                        <TableCell
                            key={"thUsers"}
                            align={"center"}
                            style={{ fontWeight: 'bold' }}
                        >
                            {"Cantidad de usuarios"}
                        </TableCell>
                        <TableCell
                            key={"thEstado"}
                            align={"center"}
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
                    {dataTable
                        // .filter(c => c.nombre.toLowerCase().includes(filter.toLowerCase()))
                        .map((row, index) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={`tr${row.id}`}>
                                    <TableCell key={`tdNom${row.id}`}>
                                        {row.nombre}
                                    </TableCell>
                                    <TableCell align='center' key={`tdCant${row.id}`}>
                                        {row.countUsuarios}
                                    </TableCell>
                                    <TableCell align='center' key={`tdSwi${row.id}`}>
                                        <Switch
                                            checked={row.estado ? true : false}
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
                                            <MenuItem onClick={() => clickAction(ActionPerfil.Edit)}>
                                                <ListItemIcon >
                                                    <EditOutlined color="primary" />
                                                </ListItemIcon>
                                                <Typography>Editar perfil</Typography>
                                            </MenuItem>
                                            <MenuItem onClick={() => clickAction(ActionPerfil.Historial)}>
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
