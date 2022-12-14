import { EditOutlined } from '@mui/icons-material'
import { Menu, MenuItem, ListItemIcon, Typography } from '@mui/material'
import { ActionPerfil } from '../../../Model/AdmPerfil-Model'
import { usePerfilOption } from '../Hook/usePerfilOption'
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';

type propsMenus = {
    opSelected: (action: ActionPerfil) => void,
    event: HTMLElement | null
}

export const PerfilOption = (info:propsMenus) => {

    const {anchorEl,clickAction,handleClose} = usePerfilOption(info);
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
    )
}
