import { IconButton, Avatar, Box, Menu, MenuItem, Divider, ListItemIcon, Typography, ListItem } from '@mui/material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useState } from 'react';
import { PersonAdd, Settings, Logout } from '@mui/icons-material';
import { ThemeProvider } from "@mui/material/styles";
import { useMenuUser } from '../hook/useMenuUser';


export const UserMenu = () => {
    const { user } = useMenuUser();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const color = "#003972";
    const stringAvatar = (name: string) => {

        if (name == "") return {}

        return {
            sx: { color, background: '#ebebeb' },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }


    return (
        <Box display={'flex'} alignItems={"center"} >
            <NotificationsActiveIcon sx={{ marginRight: '10px' }} />
            <Avatar onClick={handleClick} id="basic-button" {...stringAvatar(user.nombreUsuario)} />
            <Box>
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            width: '325px',
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem>
                        <Box>

                            <Typography sx={{ width: '305px' }} variant="body2" noWrap={true}>{user.nombreUsuario}</Typography>
                            <Typography sx={{ width: '305px' }}
                                fontSize="0.65rem"
                                variant="caption" noWrap={true}>
                                {user.nombreEmpresa}
                            </Typography>
                        </Box>

                    </MenuItem>

                    <Divider />

                    <MenuItem>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        <Typography >  Cerrar sesión</Typography>
                    </MenuItem>
                </Menu>
            </Box>

        </Box >
    )
}
