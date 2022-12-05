import { EditOutlined, MailOutline, LockOutlined } from '@mui/icons-material'
import { Menu, MenuItem, ListItemIcon, Typography } from '@mui/material'

import { ActionUser } from '../../../model/usuarioDTO'
import { useMenuOption } from '../hook/useMenuOption'
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';


type propsMenus = {

    opSelected: (action: ActionUser) => void,
    event: HTMLElement | null
}


export const MenuOption = (info:propsMenus) => {

const {anchorEl,handleClose,clickAction}= useMenuOption(info);

    return (
        <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
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
        </Menu>)
}
