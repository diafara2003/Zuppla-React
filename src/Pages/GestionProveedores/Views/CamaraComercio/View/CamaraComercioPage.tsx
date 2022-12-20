import { Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, Grid, InputAdornment, Skeleton, TextField, Typography } from "@mui/material"
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
import { SinInformacion } from "../../../Components/ImgComponents/View/SinInformacion";
import { SkeletonDinamic } from "../../../../../SharedComponents/Skeleton/view/SkeletonDynamic";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
export const CamaraComercioPage = () => {

    const { dataCamaraCopy, isLoading, openDelete, handleCloseDelete, handleDeleteCamara, setDataIdDelete,
        setOpenDelete, openNew, setOpenNew, newUser, handleOnChangeFilter } = useCamaraComercio();
    //Muestra el historial
    const [openHistorial, setOpenHistorial] = useState(false);

    const MostrarHistorial = () => {
        setOpenHistorial(true);
    }

    return (
        <>
            <HeaderComponent title={`${openHistorial ? 'Historial ' : ''} Cámara y comercio`} />
            {
                !openHistorial
                    ?
                    <Box sx={{ width: '100%' }}>
                        <Box display={"flex"} justifyContent={"end"} pt={3} pr={2}>
                            <Box >
                                <TextField sx={{ marginBottom: '1rem' }}
                                    id="filled-basic"
                                    label="Filtrar contacto"
                                    variant="outlined"
                                    size='small'
                                    onChange={handleOnChangeFilter}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end"><SearchOutlinedIcon /></InputAdornment>,
                                    }}
                                />
                            </Box>
                            <Box    >
                                <Button onClick={() => setOpenNew(() => true)} sx={{ ml: "20px" }} variant="text" > <Add sx={{ mr: "8px" }} />Agregar usuario</Button>
                            </Box>

                            <Box >
                                <Button variant="text" onClick={MostrarHistorial}> <HistoryIcon sx={{ mr: "8px" }} />Historial</Button>
                            </Box>

                        </Box>
                        <Box m={"30px"} mt={"25px"}>
                            {isLoading ?
                                <>
                                    <SkeletonDinamic NoColumnas={1} NoFilas={6} Tipo={"table"} />
                                </>
                                :
                                dataCamaraCopy.length == 0
                                    ? <Box justifyContent={'center'} display={'flex'}>
                                        <SinInformacion />
                                    </Box>
                                    : <TableCamaraComercio
                                        datatable={dataCamaraCopy!}
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


            {openNew ?
                <FrmUsuarioCC
                    handleSave={newUser}
                    onClose={(estado)=>{
                        setOpenNew(estado);
                    }}
                /> : null}

            {/* Dialog de eliminacion */}
            <Dialog
                open={openDelete}
                onClose={handleCloseDelete}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth={"md"}
            >
                <DialogTitle id="alert-dialog-title" justifyContent={'center'} display={"flex"}>
                    <Typography>  Eliminar cámara y comercio </Typography>
                </DialogTitle>
                <DialogContent>
                    <Box justifyContent={'center'} display={"flex"}>
                        <Eliminar />
                    </Box>
                    <Typography>¿Está seguro que desea eliminar este contacto?</Typography>

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