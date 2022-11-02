import {  Box, Button, FormControlLabel, Grid, Stack, Switch, TextField } from "@mui/material"
import SaveIcon from '@mui/icons-material/Save';
import { useInformacionGeneral } from "../hook/useInformacionGeneral";
import { HeaderComponent } from "../../../../../SharedComponents/Header";
import HistoryIcon from '@mui/icons-material/History';
import { SkeletonDinamic } from "../../../../../SharedComponents/Skeleton/view/SkeletonDynamic";
import { useState } from "react";
import { Autocompleteasync } from "../../../../../SharedComponents/Autocomplete/view/Autocompleteasync";
import { CiudadesDTO } from "../Model";



export const InformacionGeneralPage = () => {

    const { isLoadingCarga, dataInitialState, selectedCiudad, selectedAcEcono } = useInformacionGeneral();



    return (
        <>
            <HeaderComponent title={"Información general"} />
            <Box sx={{ m: '1px', background: 'white', height: 'calc(100vh - 150px)' }}>
                {
                    isLoadingCarga == true
                        ?
                        <Box m={5}>
                            <SkeletonDinamic NoColumnas={3} NoFilas={4} Tipo={'formulario'} />
                        </Box>
                        :
                        <Grid sx={{ minWidth: 275, p: 2 }}>
                            <Box display={"flex"} justifyContent={"end"}>
                                <Button variant="text" > <HistoryIcon sx={{ mr: "8px" }} />Historial</Button>
                            </Box>
                            <form>
                                <Grid container width={'100%'}
                                    display={"flex"}
                                    alignItems={"center"}
                                    justifyContent={"center"}
                                    spacing={2}
                                    mt={0}>
                                    <Grid item xs={3.5} >
                                        <TextField
                                            id="txtTipoPersona"
                                            label="Tipo persona"
                                            value={dataInitialState.tipoPersona}
                                            // placeholder={dataInitialState.tipoPersona}
                                            fullWidth
                                            // onChange={handleChange}
                                            disabled
                                            size="small"

                                        />
                                    </Grid>

                                    <Grid item xs={3.5} >
                                        <TextField
                                            required
                                            id="txtnombres"
                                            label="Nombres"
                                            value={dataInitialState.nombre}
                                            fullWidth
                                            size="small"
                                        />
                                    </Grid>
                                    <Grid item xs={3.5} >
                                        <TextField
                                            required
                                            id="txtApellidos"
                                            label="Apellidos"
                                            value={dataInitialState.apellido}
                                            fullWidth
                                            size="small"
                                        />
                                    </Grid>
                                    <Grid item xs={3.5} >
                                        <TextField
                                            required
                                            id="txtIdentificacion"
                                            label="Identificación"
                                            defaultValue
                                            fullWidth
                                            size="small"
                                        />
                                    </Grid>
                                    <Grid item xs={3.5} >
                                        <Autocompleteasync
                                            label="Ciudad"
                                            method="Ciudad?filter="
                                            nombreDataOcject="nombre"
                                            fnSeleted={selectedCiudad}
                                           
                                        />

                                    </Grid>
                                    <Grid item xs={3.5} >
                                        <TextField
                                            required
                                            id="txtDireccion"
                                            label="Direccion"
                                            value={dataInitialState.direccion}
                                            fullWidth
                                            size="small"
                                        />
                                    </Grid>
                                    <Grid item xs={3.5} >
                                        <TextField
                                            required
                                            id="txtCorreo"
                                            label="Correo"
                                            value={dataInitialState.correo}
                                            fullWidth
                                            size="small"
                                        />
                                    </Grid>
                                    <Grid item xs={3.5} >
                                        <TextField
                                            required
                                            id="txtTelefono"
                                            label="Telefono"
                                            value={dataInitialState.telefono}
                                            fullWidth
                                            size="small"
                                        />
                                    </Grid>
                                    <Grid item xs={3.5} >
                                        <TextField
                                            required
                                            id="txtPaginaWeb"
                                            label="Pagina WEB"
                                            value={dataInitialState.paginaWeb}
                                            fullWidth
                                            size="small"
                                        />
                                    </Grid>
                                    <Grid item xs={3.5} >
                                        <Autocompleteasync
                                            label="Actividad económica"
                                            method="ActividadEconomica?filter="
                                            nombreDataOcject="nombre"
                                            fnSeleted={selectedAcEcono}
                                            defaultValue={dataInitialState.actividadEconomica}
                                        />
                                    </Grid>
                                    <Grid item xs={7} >
                                        <FormControlLabel sx={{ fontSize: '12px !important', ml: 1 }} control={<Switch defaultChecked size="small" />} label="Se encuentra certificado en normas ISO" />
                                    </Grid>


                                </Grid>
                                <Grid style={{ display: "flex", justifyContent: 'end', marginBottom: '25px', marginRight: '150px' }}>
                                    <Stack direction="row">
                                        <Button variant="contained" endIcon={<SaveIcon />}>Guardar</Button>
                                    </Stack>
                                </Grid>
                            </form>
                        </Grid>
                }


            </Box>
        </>

    )
}
export default InformacionGeneralPage;