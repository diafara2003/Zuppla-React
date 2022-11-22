
import { Add } from "@mui/icons-material";
import { Box, Button, Grid, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { HeaderComponent } from "../../../../../SharedComponents/Header";
import HistoryIcon from '@mui/icons-material/History';
import { useDatosNotificaciones } from "../hook/useDatosNotificaciones";
import { TableNotificacionProv } from "../Components";
import { SinInformacion } from "../../../Components/ImgComponents/View/SinInformacion";
import { SkeletonDinamic } from "../../../../../SharedComponents/Skeleton/view/SkeletonDynamic";
import { DialogDelete } from "../Components/DialogDelete";
import { NewNotificacionUser } from "../Components/NewNotificacionUser";
import { TipoNotificacion } from "../Model/TipoNotificacion";
import { TableNotificacionLici } from '../Components/TableNotificacionLici';
import { HistorialComponent } from "../../../../../SharedComponents/Historial/View/HistorialComponent";
import { TiposAuditoria } from "../../../../../SharedComponents/Historial/Model/Historial-Model";


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const TabPanel = (props: TabPanelProps) => {
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
                    {children}
                </Box>
            )}
        </div>
    );
}

export const DatosNotifiaciones = () => {
    const options = {
        Proveedores: { nombre: 'Proveedores', id: 1, addTitle: "Nuevo contacto documentación", titleDelete: "Eliminar contacto notificación proveedor" },
        Licitaciones: { nombre: 'Licitaciones', id: 2, addTitle: "Nuevo contacto licitación", titleDelete: "Eliminar contacto notificación licitación" },
    };


    const { tabActive, handleChange, lstNotificacion,
        isLoading,
        openDelete, HandleOpenDelete, setOpenDelete,
        HandleDeleteOk,
        openNew, HandleOpenNew, setOpenNew
    } = useDatosNotificaciones();

    //Historial
    const [openHistorial, setOpenHistorial] = useState(false);
    const MostrarHistorial = () => {
        setOpenHistorial(true);
    }

    return (
        <>
            <HeaderComponent title={`${openHistorial ? 'Historial' : ''} Datos contacto notificaciones`} />
            {
                !openHistorial ?
                    <Box sx={{ width: '100%' }} m={2} mt={1}>
                        <Grid container>
                            <Grid item xl={8.7} lg={8} >
                                <Tabs
                                    value={tabActive}
                                    sx={{ borderBottom: 1, borderColor: 'divider' }}
                                    onChange={handleChange}
                                >
                                    <Tab key={`tab-notificaciones-${options.Proveedores.nombre}`} label={options.Proveedores.nombre} />
                                    <Tab key={`tab-notificaciones-${options.Licitaciones.nombre}`} label={options.Licitaciones.nombre} />
                                </Tabs>
                            </Grid>
                            <Grid item xl={3.3} lg={4}>
                                <Box display={"flex"} justifyContent={"end"} pt={"10px"} pr={5}>
                                    <Button variant="text" onClick={() => setOpenNew(true)} > <Add sx={{ mr: "8px" }} />Agregar nuevo contacto</Button>
                                    <Button variant="text" onClick={MostrarHistorial}> <HistoryIcon sx={{ mr: "8px" }} />Historial</Button>
                                </Box>
                            </Grid>
                        </Grid>
                        <TabPanel value={tabActive} index={0}>
                            <Box m={1} mt={1}>
                                {isLoading
                                    ? <SkeletonDinamic Tipo="table" NoFilas={5} NoColumnas={5} />
                                    : <TableNotificacionProv
                                        datatable={lstNotificacion}
                                        valorDelete={(id: number) => { HandleOpenDelete(id) }}
                                    />
                                }

                            </Box>
                        </TabPanel>
                        <TabPanel value={tabActive} index={1}>
                            <Box m={1} mt={1}>
                                {isLoading
                                    ? <SkeletonDinamic Tipo="table" NoFilas={5} NoColumnas={5} />
                                    : <TableNotificacionLici
                                        datatable={lstNotificacion}
                                        valorDelete={(id: number) => { HandleOpenDelete(id) }}
                                    />}
                            </Box>
                        </TabPanel>
                    </Box>
                    : <HistorialComponent
                        _tipoAuditoria={tabActive == 0 ? TiposAuditoria.DatosNotificacionesProveedor :
                                                TiposAuditoria.DatosNotificacionesLicitaciones }
                        onClose={(estado) => {
                            setOpenHistorial(estado);
                        }}

                    />
            }



            {openDelete
                ? <DialogDelete
                    handleOk={HandleDeleteOk}
                    handleCancel={() => setOpenDelete(false)}
                    title={tabActive == 0 ? options.Proveedores.titleDelete : options.Licitaciones.titleDelete} />
                : null
            }


            {openNew
                ? <NewNotificacionUser
                    handleOk={HandleOpenNew}
                    handleCancel={() => setOpenNew(false)}
                    title={tabActive == 0 ? options.Proveedores.addTitle : options.Licitaciones.addTitle}
                    tipoNotificacion={tabActive == 0 ? TipoNotificacion.Proveddores : TipoNotificacion.Licitaciones}
                />
                : null
            }
        </>
    );
}

export default DatosNotifiaciones;