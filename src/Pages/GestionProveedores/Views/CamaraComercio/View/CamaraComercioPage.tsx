import { Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import PermDeviceInformationIcon from '@mui/icons-material/PermDeviceInformation';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { HeaderComponent } from "../../../../../SharedComponents/Header";
import { ControllerCamaraComercio } from "../Controller/ControllerCamaraComercio";
import { TableCamaraComercio } from "../Components/TableCamaraComercio";
import { Add } from "@mui/icons-material";
import HistoryIcon from '@mui/icons-material/History';
import { FrmDatoContacto } from "../../DatosContactos/Components/FormularioDatosContacto/FrmDatoContacto";
import { FrmUsuarioCC } from "../Components/FrmUsuarioCC";
import React from "react";
import { Eliminar } from "../../../Components/ImgComponents/View/Eliminar";
export const CamaraComercioPage = () => {

    const { dataCamara, isLoading,openDelete, handleCloseDelete,handleDeleteCamara, setDataIdDelete,setOpenDelete } = ControllerCamaraComercio();
    const [open, setOpen] = React.useState(false);

    const handleClickDialogOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <HeaderComponent title={"Camara y comercio"} />
            <Box sx={{ width: '100%' }}>
                <Box display={"flex"} justifyContent={"end"} pt={"10px"}>
                    <Button onClick={handleClickDialogOpen} sx={{ ml: "20px" }} variant="text" > <Add sx={{ mr: "8px" }} />Agregar usuario</Button>
                    <Button variant="text"> <HistoryIcon sx={{ mr: "8px" }} />Historial</Button>

                </Box>
                <Box m={"30px"} mt={"25px"}>
                    {isLoading ?
                        <><Skeleton animation='wave' height={"40px"} /><Skeleton animation='wave' height={"40px"} /> <Skeleton animation='wave' height={"40px"} />
                            <Skeleton animation='wave' height={"40px"} /> <Skeleton animation='wave' height={"40px"} /><Skeleton animation='wave' height={"40px"} /></>
                        :
                        dataCamara == null ? <CircularProgress color="inherit" />
                            : <TableCamaraComercio
                                 datatable={dataCamara!}
                                 onDelete={(valor)=>{
                                    setDataIdDelete(valor)
                                    setOpenDelete(true)
                                 }} />
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
                    {"Agregar usuario"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <FrmUsuarioCC />
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
                     <Typography>  Eliminar camara y comercio </Typography> 
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
                    <Button variant="outlined" color="error" onClick={handleDeleteCamara} autoFocus >
                        Eliminar
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )

}