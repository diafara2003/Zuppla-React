import { Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, Skeleton, Typography } from "@mui/material"
import { HeaderComponent } from "../../../../../SharedComponents/Header";
import { Add } from "@mui/icons-material";
import HistoryIcon from '@mui/icons-material/History';
import { Eliminar } from "../../../Components/ImgComponents/View/Eliminar";
import { useCamaraComercio } from '../hook/useCamaraComercio';
import { TableCamaraComercio } from "../Components/TableCamaraComercio";
import { FrmUsuarioCC } from "../Components/FrmUsuarioCC";
import { useState } from "react";
import { HistorialComponent } from "../../../../../SharedComponents/Historial/View/HistorialComponent";
import { TiposAuditoria } from "../../../../../SharedComponents/Historial/Model/Historial-Model";
export const CamaraComercioPage = () => {

    const { dataCamara, isLoading, openDelete, handleCloseDelete, handleDeleteCamara, setDataIdDelete, setOpenDelete, openNew, setOpenNew, newUser } = useCamaraComercio();
    //Muestra el historial
    const [openHistorial, setOpenHistorial] = useState(false);

    const MostrarHistorial = () => {
        setOpenHistorial(true);
    }

    return (
        <>
            <HeaderComponent title={`${openHistorial ? 'Historial ' : ''} Camara y comercio`} />
            {
                !openHistorial
                    ?
                    <Box sx={{ width: '100%' }}>
                        <Box display={"flex"} justifyContent={"end"} pt={"10px"}>
                            <Button onClick={() => setOpenNew(() => true)} sx={{ ml: "20px" }} variant="text" > <Add sx={{ mr: "8px" }} />Agregar usuario</Button>
                            <Button variant="text" onClick={MostrarHistorial}> <HistoryIcon sx={{ mr: "8px" }} />Historial</Button>

                        </Box>
                        <Box m={"30px"} mt={"25px"}>
                            {isLoading ?
                                <><Skeleton animation='wave' height={"40px"} /><Skeleton animation='wave' height={"40px"} /> <Skeleton animation='wave' height={"40px"} />
                                    <Skeleton animation='wave' height={"40px"} /> <Skeleton animation='wave' height={"40px"} /><Skeleton animation='wave' height={"40px"} /></>
                                :
                                dataCamara == null ? <CircularProgress color="inherit" />
                                    : <TableCamaraComercio
                                        datatable={dataCamara!}
                                        onDelete={(valor) => {
                                            setDataIdDelete(valor)
                                            setOpenDelete(true)
                                        }} />
                            }
                        </Box>
                    </Box>
                    :
                    <HistorialComponent
                        _tipoAuditoria={TiposAuditoria.CamaraComercio}
                        onClose={(estado) => {
                            setOpenHistorial(estado);
                        }}
                    />
            }


            {openNew ? <FrmUsuarioCC handleSave={newUser} /> : null}

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
                    <Box justifyContent={'center'} display={"flex"}>
                        <Eliminar />
                    </Box>
                    <Typography>¿Esta seguro que desea eliminar este contacto?</Typography>

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

export default CamaraComercioPage;