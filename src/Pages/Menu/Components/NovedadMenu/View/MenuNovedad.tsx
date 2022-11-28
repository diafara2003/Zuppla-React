import { Menu, Box, Tabs, Tab, MenuItem, ListItemIcon, IconButton, Badge, Typography, BadgeProps, styled } from '@mui/material'
import React, { useState } from 'react'
import { useMenuNotificacion } from '../../User/hook/useMenuNotificacion';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useNavigate } from 'react-router-dom';

type props = {
    openMenu?: HTMLElement | null
}

export const MenuNovedad = ({ openMenu }: props) => {
    const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
        "& .MuiBadge-badge": {
            right: 30,
            top: 1,
            color: 'white',
            padding: "0 4px",
        }
    }));
    const StyledBadgeTab = styled(Badge)<BadgeProps>(({ theme }) => ({
        "& .MuiBadge-badge": {
            right: 0,
            top: -4,
            color: 'white',
            padding: "",
        }
    }));

    const { total, totalProveedores, totalLicitaciones, notificacionesLicitacion, notificacionesProveedor } = useMenuNotificacion();
    //Menu notificaciones
    const [anchorElNov, setAnchorElNov] = useState<null | HTMLElement>(null);


    const handleClickNov = (event: React.MouseEvent<HTMLElement>) => {
        if (event == undefined) return;
        setAnchorElNov((event as React.MouseEvent<HTMLElement>).currentTarget);
    };
    const handleCloseNov = () => {
        setAnchorElNov(null);
    };
    const [valueTab, setValue] = useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const navigate = useNavigate();
    return (
        <>
            <IconButton color='inherit'
                onClick={handleClickNov}>
                <StyledBadge badgeContent={total} color="warning">
                    <NotificationsActiveIcon />
                </StyledBadge>
            </IconButton>
            <Menu
                anchorEl={anchorElNov}
                id="account-menu"
                open={Boolean(anchorElNov)}
                onClose={handleCloseNov}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        width: '500px',
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
                <Box>
                    <Tabs
                        value={valueTab}
                        onChange={handleChange}
                        sx={{ borderBottom: 1, borderColor: 'divider' }}
                        aria-label="">
                        <Tab label={<StyledBadgeTab color='warning' badgeContent={totalProveedores}>Proveedores</StyledBadgeTab>} key={"tabProveedores"} />
                        <Tab label={<StyledBadgeTab color='warning' badgeContent={totalLicitaciones}>Licitaciones</StyledBadgeTab>} key={"tabLicitaciones"} />
                    </Tabs>
                </Box>
                {
                    valueTab == 0 ?
                        <Box sx={{ maxHeight: '500px', overflow: 'auto' }}>
                            {notificacionesProveedor.length > 0
                                ?
                                notificacionesProveedor.map(({ contNotificaciones, nombreConst, constructoraId }) => {
                                    return (
                                        <MenuItem
                                            key={`menu-novedad-${constructoraId}`}
                                            onClick={() => {
                                                handleCloseNov();
                                                navigate(`/gestionproveedor/Novedades/${constructoraId}`, { replace: true });

                                            }}>
                                            <ListItemIcon>
                                                <IconButton color='inherit'
                                                    onClick={handleClickNov}>
                                                    <Badge badgeContent={contNotificaciones} color="warning">
                                                        <NotificationsActiveIcon />
                                                    </Badge>
                                                </IconButton>
                                            </ListItemIcon>
                                            <Typography pl={2} > {nombreConst}</Typography>
                                        </MenuItem>)
                                })
                                :
                                <Box display={'flex'} justifyContent={'center'}>
                                    <Typography> Sin novedaes pendientes</Typography>
                                </Box>
                            }
                        </Box>
                        : <Box>
                            {notificacionesLicitacion.length > 0
                                ?
                                notificacionesLicitacion.map(({ contNotificaciones, nombreConst, constructoraId }) => {
                                    return (
                                        <MenuItem key={`menu-novedad-${constructoraId}`}>
                                            <ListItemIcon>
                                                <IconButton color='inherit'
                                                    onClick={handleClickNov}>
                                                    <Badge badgeContent={contNotificaciones} color="warning">
                                                        <NotificationsActiveIcon />
                                                    </Badge>
                                                </IconButton>
                                            </ListItemIcon>
                                            <Typography pl={2} > {nombreConst}</Typography>
                                        </MenuItem>)
                                })
                                :
                                <Box p={2} display={'flex'} justifyContent={'center'}>
                                    <Typography> Sin novedades pendientes</Typography>
                                </Box>
                            }
                        </Box>
                }
            </Menu>
        </>
    )
}
