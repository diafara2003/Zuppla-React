import { Autocomplete, Box, Button, Card, CardActions, CardContent, CardHeader, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, FormControlLabel, Grid, IconButton, List, ListItem, ListItemText, Menu, MenuItem, Paper, Stack, Switch, Tab, Tabs, TextField, Typography } from "@mui/material";
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
export const DatosContactos = () => {

    const options = [
        { nombre: 'Representante legal', id: 1 },
        { nombre: 'Responsable de pedidos', id: 2 },
        { nombre: 'Responsable de contratos', id: 3 },
        { nombre: 'Responsable de actas', id: 4 },
        { nombre: 'Asesor comercial', id: 5 },
        { nombre: 'Responsable de cartera', id: 6 }
    ];

    const { dataContactos, isLoading, value, handleChange } = ControllerDatosContactos();

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
                  
                    <Button  variant="text" onClick={handleClickDialogOpen}> <Add />Agregar nuevo contacto</Button>
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
                    {isLoading ? <Skeleton></Skeleton>
                        :
                        <CardContacto datosContactos={dataContactos!} />
                    }
                </Box>
            </Box>

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
                    <Button  variant="outlined" onClick={handleClose} >Cancelar</Button>
                    <Button variant="contained" color="primary" onClick={handleClose} autoFocus >
                        Guardar
                    </Button>
                </DialogActions>
            </Dialog>

        </>
    );
}

