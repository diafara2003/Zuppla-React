import { Autocomplete, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, FormControlLabel, Grid, IconButton, List, ListItem, ListItemText, Menu, MenuItem, Paper, Stack, Switch, Tab, Tabs, TextField, Typography } from "@mui/material";
import React from "react";
import SaveIcon from '@mui/icons-material/Save';
import { HeaderComponent } from "../../../../../SharedComponents/Header";
import { Add } from "@mui/icons-material";
import HistoryIcon from '@mui/icons-material/History';
import { ControllerDatosContactos } from "../Controller/ControllerDatosContactos";
import { Skeleton } from "@mui/lab";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { InputLabel } from '@mui/material';
import { theme } from '../../../../../theme/theme';
import { CardContacto } from "../Components/CardContacto";
import { FrmDatoContacto } from "../Components/FrmDatoContacto";
import { SinInformacion } from "../../../Components/ImgComponents/View/SinInformacion";
import { SkeletonDinamic } from "../../../Components/SkeletonComp/View/SkeletonDinamic";
import { Eliminar } from "../../../Components/ImgComponents/View/Eliminar";
// import  from "../../../../../img/Estados/SinInformacion.png"
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export const DatosContactos = () => {

    const options = [
        { nombre: 'Representante legal', id: 1 },
        { nombre: 'Responsable de pedidos', id: 2 },
        { nombre: 'Responsable de contratos', id: 3 },
        { nombre: 'Responsable de actas', id: 4 },
        { nombre: 'Asesor comercial', id: 5 },
        { nombre: 'Responsable de cartera', id: 6 }
    ];

    const { dataContactos, isLoading, value, openDelete,
        handleChange, handleCloseDelete, handleDeleteContacto, setDataDeleteId, actionCardContacto } = ControllerDatosContactos();

    const [open, setOpen] = React.useState(false);

    const handleClickDialogOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <HeaderComponent title={"Datos contactos"} />
            <Box sx={{ width: '100%' }}>
                <Box display={"flex"} justifyContent={"end"} pt={"10px"}>

                    <Button variant="text" onClick={handleClickDialogOpen}> <Add />Agregar nuevo contacto</Button>
                    <Button variant="text" > <HistoryIcon sx={{ mr: "8px" }} />Historial</Button>
                </Box>
                <Box>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        variant="fullWidth" centered
                        sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        {options.map((option, index) => (
                            <Tab key={option.id} label={option.nombre} />
                        ))}
                    </Tabs>
                </Box>
                <Box m={2}>
                    {isLoading
                        ?
                        <SkeletonDinamic NoColumnas={3} NoFilas={2} Tipo={'CARD'} />
                        : (
                            dataContactos?.length == 0
                                ?
                                <Box justifyContent={'center'} display={'flex'}>
                                    <SinInformacion />
                                </Box>
                                :
                                <Grid container spacing={2}>
                                    {
                                        dataContactos.map((contacto) => {
                                            return (<CardContacto
                                                contacto={contacto}
                                                onjau={(valor) => { 
                                                    actionCardContacto(valor.action);
                                                    setDataDeleteId(valor.id);
                                                 }}
                                                
                                            />)

                                        })
                                    }
                                </Grid>
                        )
                    }
                </Box>
            </Box>
            {/* Dialog insercion */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth={"md"}
            >
                <DialogTitle id="alert-dialog-title">
                    {options[value].nombre}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <FrmDatoContacto />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" onClick={handleClose} >Cancelar</Button>
                    <Button variant="contained" color="primary" onClick={handleClose} autoFocus >
                        Guardar
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Dialog de eliminacion */}
            <Dialog
                open={openDelete}
                onClose={handleCloseDelete}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth={"md"}
            >
                <DialogTitle id="alert-dialog-title" justifyContent={'center'} display={"flex"}>
                    <Typography>  {options[value].nombre} </Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Box justifyContent={'center'} display={"flex"}>
                            <Eliminar />
                        </Box>
                        <Typography>¿Esta seguro que desea eliminar este contacto?</Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="text" onClick={handleCloseDelete} >Cancelar</Button>
                    <Button variant="contained" color="error" onClick={handleDeleteContacto} autoFocus >
                        Eliminar
                    </Button>
                </DialogActions>
            </Dialog>

        </>
    );
}

