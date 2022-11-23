import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Tab, Tabs, Typography } from "@mui/material";
import { HeaderComponent } from "../../../../../SharedComponents/Header";
import { Add } from "@mui/icons-material";
import HistoryIcon from '@mui/icons-material/History';
import { ControllerDatosContactos } from "../hook/useDatosContactos";
import { CardContacto } from "../Components/CardContacto";
import { FrmDatoContacto, typeModal } from "../Components/FrmDatoContacto";
import { SinInformacion } from "../../../Components/ImgComponents/View/SinInformacion";

import { Eliminar } from "../../../Components/ImgComponents/View/Eliminar";
import { SkeletonDinamic } from "../../../../../SharedComponents/Skeleton/view/SkeletonDynamic";
import { ActionContacto } from "../Model/DatosContacto-Model";
import { useState } from "react";
import { HistorialComponent } from "../../../../../SharedComponents/Historial/View/HistorialComponent";
import { TiposAuditoria } from "../../../../../SharedComponents/Historial/Model/Historial-Model";


export const DatosContactos = () => {

    const options = [
        { nombre: 'Representante legal', id: 1 },
        { nombre: 'Responsable de pedidos', id: 2 },
        { nombre: 'Responsable de contratos', id: 3 },
        { nombre: 'Responsable de actas', id: 4 },
        { nombre: 'Asesor comercial', id: 5 },
        { nombre: 'Responsable de cartera', id: 6 }
    ];
    const { dataContactos, isLoading, value, openDelete, valueContacto,
        handleChange, handleCloseDelete, handleDeleteContacto, dataContactoSelect, actionCardContacto, setNewDatosContactos } = ControllerDatosContactos();

    const [open, setOpen] = useState(false);
    const [stateTipoModal, setStateTipoModal] = useState(typeModal.add)

    //Historial
    const [openHistorial, setOpenHistorial] = useState(false);
    const MostrarHistorial = () => {
        setOpenHistorial(true);
    }

    return (
        <>
            <HeaderComponent title={`${openHistorial ? ('Historial ' + options[value].nombre) : ''} ${!openHistorial ? 'Datos contacto' : ''} `} />
            {
                !openHistorial
                    ?
                    <Box sx={{ width: '100%' }}>
                        <Box display={"flex"} justifyContent={"end"} pt={"10px"} pr={3} >
                            <Button variant="text"
                                onClick={() => {
                                    setOpen(true);
                                    setStateTipoModal(typeModal.add);
                                }}
                                startIcon={<Add color="primary" />}
                                >
                               Agregar nuevo contacto</Button>
                            <Button variant="text" onClick={MostrarHistorial} > <HistoryIcon sx={{ mr: "8px" }} />Historial</Button>
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
                                <SkeletonDinamic NoColumnas={3} NoFilas={1} Tipo={'card'} />
                                : (
                                    dataContactos?.length == 0
                                        ?
                                        <Box justifyContent={'center'} display={'flex'}>
                                            <SinInformacion />
                                        </Box>
                                        :
                                        <Box sx={{ overflow: 'auto', maxHeight: 'calc(100vh - 17rem)' }}>
                                            <Grid container spacing={2} >
                                                {
                                                    dataContactos.map((contacto) => {
                                                        return (
                                                            <CardContacto
                                                                key={contacto.id}
                                                                contacto={contacto}
                                                                onChangeAction={(valor) => {
                                                                    dataContactoSelect.current = valor.contacto
                                                                    if (valor.action == ActionContacto.Delete)
                                                                        actionCardContacto(valor.action);
                                                                    if (valor.action == ActionContacto.Edit) {
                                                                        setStateTipoModal(typeModal.edit);
                                                                        console.log(dataContactoSelect.current)
                                                                        setOpen(true);
                                                                    }

                                                                }}

                                                            />)
                                                    })
                                                }
                                            </Grid>
                                        </Box>

                                )
                            }
                        </Box>
                    </Box>
                    :
                    <HistorialComponent
                        _tipoAuditoria={Object.values(TiposAuditoria)[valueContacto]}
                        onClose={(estado) => {
                            setOpenHistorial(estado);
                        }}

                    />
            }



            {/* Dialog EDIT - NEW */}
            {open ?
                <FrmDatoContacto
                    _title={options[value].nombre}
                    open={open}
                    editDatosContacto={dataContactoSelect.current}
                    newDatosContacto={((newContacto) => {
                        newContacto.tipoContactoId = valueContacto
                        stateTipoModal == typeModal.edit ?? newContacto.isNew == false
                        console.log(newContacto)
                        actionCardContacto((stateTipoModal == typeModal.add ? ActionContacto.New : ActionContacto.Edit), newContacto);
                    })}
                    tipo={stateTipoModal}
                    close={(close) => {
                        setOpen(close);
                    }}
                /> : null
            }

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
                    <Button variant="outlined" color="error" onClick={handleDeleteContacto} autoFocus >
                        Eliminar
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default DatosContactos;