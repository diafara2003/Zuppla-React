import { Grid, Card, CardHeader, IconButton, CardContent,  Typography, Divider,  ListItemIcon, Menu, MenuItem } from '@mui/material'

import { TerDatosContactoDTO } from '../../../Model/DatosContactoDTO'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { EditOutlined,  DeleteOutline } from '@mui/icons-material';
import { ActionContacto } from '../../../Model/DatosContacto-Model';
import { useCardContacto } from '../hook/useCardContacto';
type props = {
    contacto: TerDatosContactoDTO,
    // valorDelete: (valorId: number) => void,
    // action: (actionContacto: string) => void
    onChangeAction: (data: typeAction) => void
}


type typeAction = {
    action: ActionContacto;
    contacto: TerDatosContactoDTO;
}


export const CardContacto = (info: props) => {

const {anchorEl,contacto,handleClose,open,clickAction} = useCardContacto(info);


    return (
        <Grid item xs={4}>
            <Card variant="outlined" sx={{ backgroundColor: '#FBFBFB' }}>
                <CardHeader key={contacto.id}
                    sx={{ pb: 0, }}
                    action={
                        <><IconButton aria-label="settings" color="primary" onClick={(event) => handleClick(event)}>
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
                                <MenuItem onClick={() => clickAction(ActionContacto.Edit, contacto)}>
                                    <ListItemIcon>
                                        <EditOutlined color="primary" />
                                    </ListItemIcon>
                                    <Typography>Editar contacto</Typography>
                                </MenuItem>
                                <MenuItem onClick={() => clickAction(ActionContacto.Delete, contacto)}>
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
                    <Grid container mb={1} p={0}>
                        <Grid item xs={5} mb={1} p={0}>
                            <Typography m={0} p={0} sx={{ fontSize: 11 }} color="text.secondary" gutterBottom>
                                Numero de documento
                            </Typography>
                            <Typography sx={{ fontSize: 15, mb: 0 }} color="text.primary" >
                                {contacto.numeroDocumento}
                            </Typography>
                            <Divider orientation="vertical" flexItem />
                        </Grid>
                        <Divider orientation="vertical" flexItem />
                        <Grid item xs={6} ml={2} p={0}>
                            <Typography variant='subtitle2' m={0} p={0} sx={{ fontSize: 11 }} color="text.secondary" gutterBottom>
                                Email
                            </Typography>
                            <Typography sx={{ fontSize: 15, mb: 0, wordBreak: "break-all" }} color="text.primary" >
                                {contacto.correo}
                            </Typography>
                        </Grid>
                    </Grid>
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
                                Celular 2
                            </Typography>
                            <Typography sx={{ fontSize: 15, mb: 0 }} color="text.primary" >
                                {contacto.telefono}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container mb={1} p={0}>
                        <Grid item xs={5} mb={1} p={0}>

                            <Typography m={0} p={0} sx={{ fontSize: 11 }} color="text.secondary" gutterBottom>
                                Ciudad
                            </Typography>
                            <Typography sx={{ fontSize: 15, mb: 0 }} color="text.primary" >
                                {contacto.ciudad.nombre}
                            </Typography>

                            <Divider orientation="vertical" flexItem />
                        </Grid>
                        <Divider orientation="vertical" flexItem />
                        <Grid item xs={5} mb={1} ml={2} p={0}>
                            <Typography m={0} p={0} sx={{ fontSize: 11 }} color="text.secondary" gutterBottom>
                                Dirección
                            </Typography>
                            <Typography sx={{ fontSize: 15, mb: 0 }} color="text.primary" >
                                {contacto.direccion}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    )
}
