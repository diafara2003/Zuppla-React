import { Avatar, Box, Menu, MenuItem, Divider, ListItemIcon, Typography, Badge, styled, BadgeProps, IconButton } from '@mui/material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useState } from 'react';
import { Logout, ExpandMore } from '@mui/icons-material';

import { useMenuUser } from '../hook/useMenuUser';

import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import { useMenuNotificacion } from '../hook/useMenuNotificacion';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({

    "& .MuiBadge-badge": {
        right: 30,
        top: 1,
        color: 'white',
        padding: "0 4px",
    }

}));

export const UserMenu = () => {
    const { user, signOut, stringAvatar, changePassword } = useMenuUser();
    const { total } = useMenuNotificacion();


    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        if (event == undefined) return;
        setAnchorEl((event as React.MouseEvent<HTMLElement>).currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };



    return (
        <Box display={'flex'} alignItems={"center"} >
            <IconButton sx={{ marginRight: '10px' }} color='inherit'>
                <StyledBadge badgeContent={total} color="warning">
                    <NotificationsActiveIcon   />
                </StyledBadge>
            </IconButton>

            <Avatar onClick={handleClick} id="basic-button"  {...stringAvatar()} />
            <ExpandMore color="inherit" />

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
                            <Typography sx={{ width: '305px', fontSize: 9 }}

                                variant="caption" noWrap={true}
                                color="text.secondary">
                                {user.nombreEmpresa}

                            </Typography>
                        </Box>

                    </MenuItem>


                    <Divider />

                    <MenuItem onClick={() => {
                        setAnchorEl(null);
                        changePassword();
                    }}>
                        <ListItemIcon>
                            <VpnKeyOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <Typography >  Cambiar contraseña</Typography>
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
