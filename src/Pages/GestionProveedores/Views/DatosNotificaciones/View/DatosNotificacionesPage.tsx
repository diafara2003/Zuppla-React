
import { Add } from "@mui/icons-material";
import { Backdrop, Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, List, ListItem, ListItemText, Menu, MenuItem, Skeleton, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import { HeaderComponent } from "../../../../../SharedComponents/Header";
import HistoryIcon from '@mui/icons-material/History';
import { ControllerDatosNotificaciones } from "../Controller/ControllerDatosNotificaciones";
import { TableDatosNotificaciones } from "../Components/TableDatosNotificaciones";
import { TableDatosNotLicitaciones } from "../Components/TableDatosNotLicitaciones";
import { FrmDatoContacto } from "../../DatosContactos/Components/FormularioDatosContacto/FrmDatoContacto";
import { FrmUser } from "../Components/FrmUser";
import { FrmUserLicitacion } from "../Components/FrmUserLicitacion";
import { Eliminar } from "../../../Components/ImgComponents/View/Eliminar";
import { SinInformacion } from "../../../Components/ImgComponents/View/SinInformacion";
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export const DatosNotifiaciones = () => {
    const options = [
        { nombre: 'Proveedores', id: 1, addTitle: "Nuevo contacto documentación", titleDelete: "Eliminar contacto notificación proveedor" },
        { nombre: 'Licitaciones', id: 2, addTitle: "Nuevo contacto licitación", titleDelete: "Eliminar contacto notificación licitación" },
    ];
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const { dataInitialLicitaState, dataInitialProveState,
        isLoadingLicCarga, isLoadingProCarga, openDelete, handleCloseDelete,
        handleDeleteClickProve, handleDeleteClickLici, handleClickDialogDeleteOpen,
        handleLiciDeleteOpen } = ControllerDatosNotificaciones();

    const [open, setOpen] = React.useState(false);


    const handleClickDialogOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <HeaderComponent title={"Datos contacto notificaciones"} />
            <Box sx={{ width: '100%' }}>
                <Box display={"flex"} justifyContent={"end"} pt={"10px"}>
                    <Button variant="text" onClick={handleClickDialogOpen} > <Add sx={{ mr: "8px" }} />Agregar nuevo contacto</Button>
                    <Button variant="text" > <HistoryIcon sx={{ mr: "8px" }} />Historial</Button>
                </Box>
                <Box pt={1}>
                    <Tabs value={value} onChange={handleChange}
                        aria-label="basic tabs example"
                        variant="fullWidth"
                        sx={{ borderBottom: 1, borderColor: 'divider' }}
                        centered>
                        {options.map((opcion, index) => {
                            return (<Tab label={opcion.nombre} {...a11yProps(index)} />)
                        })}
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <Box m={1} mt={1}>
                        {isLoadingProCarga ?
                            <><Skeleton animation='wave' height={"40px"} /><Skeleton animation='wave' height={"40px"} /> <Skeleton animation='wave' height={"40px"} />
                                <Skeleton animation='wave' height={"40px"} /> <Skeleton animation='wave' height={"40px"} /><Skeleton animation='wave' height={"40px"} /></>
                            :
                            dataInitialProveState.length == 0
                                ? <Box justifyContent={'center'} display={'flex'}>
                                    <SinInformacion />
                                </Box>
                                : <TableDatosNotificaciones datatable={dataInitialProveState!} valorDelete={(value) => { handleClickDialogDeleteOpen(value) }} />
                        }

                    </Box>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Box m={1} mt={1}>
                        {isLoadingLicCarga ?
                            <><Skeleton animation='wave' height={"40px"} /><Skeleton animation='wave' height={"40px"} /> <Skeleton animation='wave' height={"40px"} />
                                <Skeleton animation='wave' height={"40px"} /> <Skeleton animation='wave' height={"40px"} /><Skeleton animation='wave' height={"40px"} /></>
                            :
                            dataInitialLicitaState.length == 0
                                ?
                                <Box justifyContent={'center'} display={'flex'}>
                                    <SinInformacion />
                                </Box>
                                :
                                <TableDatosNotLicitaciones datatable={dataInitialLicitaState!} valorDelete={(value) => { handleLiciDeleteOpen(value) }} />}
                    </Box>
                </TabPanel>
            </Box>
            {/* Dialogo de insercion */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth={"md"}
            >
                <DialogTitle id="alert-dialog-title">
                    {options[value].addTitle}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {value == 0
                            ? <FrmUser />
                            : <FrmUserLicitacion />
                        }
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" onClick={handleClose} >Cancelar</Button>
                    <Button variant="contained" color="primary" onClick={handleClose} autoFocus >
                        Guardar
                    </Button>
                </DialogActions>
            </Dialog>
            {/* Dialogo de eliminacion */}
            <Dialog
                open={openDelete}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth={"md"}
            >
                <DialogTitle id="alert-dialog-title">
                    <Typography>  {options[value].titleDelete} </Typography>
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
                    {
                        options[value].id == 1 ?
                            <Button variant="contained" color="error" onClick={handleDeleteClickProve} autoFocus >
                                Eliminar
                            </Button>
                            :
                            <Button variant="contained" color="error" onClick={handleDeleteClickLici} autoFocus >
                                Eliminar
                            </Button>}
                </DialogActions>
            </Dialog>
        </>
    );
}