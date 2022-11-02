import { Box, Button, FormControlLabel, Grid, Stack, Switch, TextField } from "@mui/material"
import SaveIcon from '@mui/icons-material/Save';
import { useInformacionGeneral } from "../hook/useInformacionGeneral";
import { HeaderComponent } from "../../../../../SharedComponents/Header";
import HistoryIcon from '@mui/icons-material/History';
import { SkeletonDinamic } from "../../../../../SharedComponents/Skeleton/view/SkeletonDynamic";
import { useState } from "react";
import { Autocompleteasync } from "../../../../../SharedComponents/Autocomplete/view/Autocompleteasync";
import { CiudadesDTO } from "../Model";
import { AlertPortal } from "../../../../../SharedComponents/Alert";
import { LoadingButton } from "@mui/lab";



export const InformacionGeneralPage = () => {

    const { isLoadingCarga, dataInitialState, stateAlert,isSaving, selectedCiudad, selectedAcEcono, handleGuardar, onInputChange } = useInformacionGeneral();



    return (
        <>
            <HeaderComponent title={"Información general"} />

            <AlertPortal data={stateAlert}></AlertPortal>

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
                            <Box component="form" onSubmit={handleGuardar}>
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
                                            onChange={onInputChange}
                                            size="small"

                                        />
                                    </Grid>

                                    <Grid item xs={3.5} >
                                        <TextField
                                            required
                                            id="txtnombres"
                                            label="Nombres"
                                            name="nombre"
                                            value={dataInitialState.nombre}
                                            fullWidth
                                            onChange={onInputChange}
                                            size="small"
                                        />
                                    </Grid>
                                    <Grid item xs={3.5} >
                                        <TextField
                                            required
                                            id="txtApellidos"
                                            label="Apellidos"
                                            name="apellido"
                                            value={dataInitialState.apellido}
                                            fullWidth
                                            onChange={onInputChange}
                                            size="small"
                                        />
                                    </Grid>
                                    <Grid item xs={3.5} >
                                        <TextField
                                            required
                                            id="txtIdentificacion"
                                            label="Identificación"
                                            name="numeroIdentificacion"
                                            value={dataInitialState.numeroIdentificacion}
                                            fullWidth
                                            onChange={onInputChange}
                                            size="small"
                                        />
                                    </Grid>
                                    <Grid item xs={3.5} >
                                        <Autocompleteasync
                                            label="Ciudad"
                                            method="Ciudad?filter="
                                            nombreDataOcject="nombre"
                                            fnSeleted={selectedCiudad}
                                            defaultValue={dataInitialState.ciudad}
                                        />

                                    </Grid>
                                    <Grid item xs={3.5} >
                                        <TextField
                                            required
                                            id="txtDireccion"
                                            label="Direccion"
                                            name="direccion"
                                            value={dataInitialState.direccion}
                                            fullWidth
                                            onChange={onInputChange}
                                            size="small"
                                        />
                                    </Grid>
                                    <Grid item xs={3.5} >
                                        <TextField
                                            required
                                            id="txtCorreo"
                                            label="Correo"
                                            name="Correo"
                                            onChange={onInputChange}
                                            value={dataInitialState.correo}
                                            fullWidth
                                            size="small"
                                        />
                                    </Grid>
                                    <Grid item xs={3.5} >
                                        <TextField
                                            required
                                            id="txtTelefono"
                                            name="telefono"
                                            label="Telefono"
                                            onChange={onInputChange}
                                            value={dataInitialState.telefono}
                                            fullWidth
                                            size="small"
                                        />
                                    </Grid>
                                    <Grid item xs={3.5} >
                                        <TextField
                                            id="txtPaginaWeb"
                                            label="Pagina WEB"
                                            onChange={onInputChange}
                                            name="paginaWeb"
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
                                        <LoadingButton 
                                        type="submit" 
                                        loadingPosition="end"
                                        variant="contained" 
                                        loading={isSaving}
                                        endIcon={<SaveIcon />}>Guardar</LoadingButton>
                                    </Stack>
                                </Grid>
                            </Box>
                        </Grid>
                }


            </Box>
        </>

    )
}
export default InformacionGeneralPage;