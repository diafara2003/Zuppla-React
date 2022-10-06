import { IconButton, Avatar, Box, Menu, MenuItem, Divider, ListItemIcon, Typography, ListItem } from '@mui/material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useState } from 'react';
import { PersonAdd, Settings, Logout, ExpandMore } from '@mui/icons-material';
import { ThemeProvider } from "@mui/material/styles";
import { useMenuUser } from '../hook/useMenuUser';
import { theme } from '../../../../../theme/theme';


export const UserMenu = () => {
    const { user, signOut, stringAvatar } = useMenuUser();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
   
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };



    return (
        <Box display={'flex'} alignItems={"center"} >
            <NotificationsActiveIcon sx={{ marginRight: '10px' }} color="primary" />

            <Avatar onClick={handleClick} id="basic-button"  {...stringAvatar(user.nombreUsuario)} />
            <ExpandMore color="primary" />

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

                            <Typography sx={{ width: '305px', fontSize: 13 }}
                                color="text.primary"
                                variant="body1" noWrap={true}>{user.nombreUsuario}</Typography>
                            <Typography sx={{ width: '305px',fontSize: 9 }}
                                
                                variant="caption" noWrap={true}
                                color="text.secondary">
                                {user.nombreEmpresa}
                                
                            </Typography>
                        </Box>

                    </MenuItem>

                    <Divider />

                    <MenuItem
                        onClick={signOut}
                    >
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
