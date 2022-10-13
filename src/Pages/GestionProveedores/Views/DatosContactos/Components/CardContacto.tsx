import { Grid, Card, CardHeader, IconButton, CardContent, Box, Typography, Divider, CardActions, ListItemIcon, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import { TerDatosContactoDTO } from '../Model/DatosContactoDTO'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { EditOutlined, MailOutline, LockOutlined, DeleteOutline } from '@mui/icons-material';
type props = {
    contacto: TerDatosContactoDTO,
    valorDelete: (valorId: number) => void,
    action: (actionContacto: string) => void
}

export const CardContacto = ({ contacto, valorDelete, action }: props) => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>, contactoSelect: TerDatosContactoDTO) => {
        valorDelete(contactoSelect.id)
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const clickAction = (actionSelect: string) => {
        action(actionSelect);
    };

    return (

        <Grid item xs={4}>
            <Card variant="outlined" sx={{ backgroundColor: '#FBFBFB' }}>
                <CardHeader
                    sx={{ pb: 0, }}
                    action={
                        <><IconButton aria-label="settings" color="primary" onClick={(event) => handleClick(event, contacto)}>
                            <MoreVertIcon />
                        </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                id={`tdmenu${contacto.id}`}
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
                                <MenuItem onClick={() => clickAction('I')}>
                                    <ListItemIcon>
                                        <EditOutlined color="primary" />
                                    </ListItemIcon>
                                    <Typography>Editar contacto</Typography>
                                </MenuItem>
                                <MenuItem onClick={() => clickAction('I')}>
                                    <ListItemIcon>
                                        <DeleteOutline color="error" />
                                    </ListItemIcon>
                                    <Typography color="error">Eliminar contacto</Typography>
                                </MenuItem>
                            </Menu></>
                    }
                    title={contacto.nombre}
                    titleTypographyProps={{ variant: 'body1' }}
                    subheaderTypographyProps={{ variant: 'body2' }}
                    subheader={contacto.cargo}
                ></CardHeader>
                <CardContent sx={{ pt: 1 }} style={{ paddingBottom: '0px !important' }} >
                    <Box mb={1} p={0}>
                        <Typography m={0} p={0} sx={{ fontSize: 11 }} color="text.secondary" gutterBottom>
                            Numero de documento
                        </Typography>

                        <Typography sx={{ fontSize: 15, mb: 0 }} color="text.primary" >
                            {contacto.numeroDocumento}
                        </Typography>
                    </Box>

                    <Box mb={1} p={0}>
                        <Typography m={0} p={0} sx={{ fontSize: 11 }} color="text.secondary" gutterBottom>
                            Email
                        </Typography>
                        <Typography sx={{ fontSize: 15, mb: 0 }} color="text.primary" >
                            {contacto.numeroDocumento}
                        </Typography>
                    </Box>

                    <Grid container mb={1} p={0}>
                        <Grid item xs={5} mb={1} p={0}>
                            <Typography m={0} p={0} sx={{ fontSize: 11 }} color="text.secondary" gutterBottom>
                                Celular
                            </Typography>
                            <Typography sx={{ fontSize: 15, mb: 0 }} color="text.primary" >
                                {contacto.celular}
                            </Typography>
                            <Divider orientation="vertical" flexItem />
                        </Grid>
                        <Divider orientation="vertical" flexItem />
                        <Grid item xs={5} mb={1} ml={2} p={0}>
                            <Typography m={0} p={0} sx={{ fontSize: 11 }} color="text.secondary" gutterBottom>
                                Telefono
                            </Typography>
                            <Typography sx={{ fontSize: 15, mb: 0 }} color="text.primary" >
                                {contacto.telefono}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Box mb={1} p={0}>
                        <Typography m={0} p={0} sx={{ fontSize: 11 }} color="text.secondary" gutterBottom>
                            Dirección
                        </Typography>
                        <Typography sx={{ fontSize: 15, mb: 0 }} color="text.primary" >
                            {contacto.direccion}
                        </Typography>
                    </Box>
                    <Box mb={0} p={0}>
                        <Typography m={0} p={0} sx={{ fontSize: 11 }} color="text.secondary" gutterBottom>
                            Ciudad
                        </Typography>
                        <Typography sx={{ fontSize: 15, mb: 0 }} color="text.primary" >
                            {contacto.ciudad.nombre}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    )
}
