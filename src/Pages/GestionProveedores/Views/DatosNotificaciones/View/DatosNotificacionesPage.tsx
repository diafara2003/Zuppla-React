
import { Add } from "@mui/icons-material";
import { Box, Button, Tab, Tabs } from "@mui/material";
import React from "react";
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

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
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


    return (
        <>
            <HeaderComponent title={"Datos contacto notificaciones"} />
            <Box sx={{ width: '100%' }}>
                <Box display={"flex"} justifyContent={"end"} pt={"10px"}>
                    <Button variant="text" onClick={() => setOpenNew(true)} > <Add sx={{ mr: "8px" }} />Agregar nuevo contacto</Button>
                    <Button variant="text" > <HistoryIcon sx={{ mr: "8px" }} />Historial</Button>
                </Box>
                <Box pt={1}>
                    <Tabs value={tabActive} onChange={handleChange}
                        aria-label="basic tabs example"
                        variant="fullWidth"
                        sx={{ borderBottom: 1, borderColor: 'divider' }}
                        centered>
                        <Tab key={`tab-notificaciones-${options.Proveedores.nombre}`} label={options.Proveedores.nombre} {...a11yProps(0)} />
                        <Tab key={`tab-notificaciones-${options.Licitaciones.nombre}`} label={options.Licitaciones.nombre} {...a11yProps(1)} />
                    </Tabs>
                </Box>
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