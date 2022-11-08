import { Box, Button, FormControlLabel, Grid, Stack, Switch, TextField } from "@mui/material"
import SaveIcon from '@mui/icons-material/Save';
import { useInformacionGeneral } from "../hook/useInformacionGeneral";
import { HeaderComponent } from "../../../../../SharedComponents/Header";
import HistoryIcon from '@mui/icons-material/History';
import { SkeletonDinamic } from "../../../../../SharedComponents/Skeleton/view/SkeletonDynamic";
import { Autocompleteasync } from "../../../../../SharedComponents/Autocomplete/view/Autocompleteasync";
import { LoadingButton } from "@mui/lab";
import { InfTributariaPages } from "../../InformacionTributaria/Views/InfTributariaPages";
import { InfSISO } from "../../InformacionSISO/view/InfSISO";
import { InfBancariaPage } from '../../InformacionBancaria/view/InfBancariaPage';



export const InformacionGeneralPage = () => {

    const { isLoadingCarga, dataInitialState, isSaving,
        validation,
        selectedCiudad, selectedAcEcono, handleGuardar, onInputChange } = useInformacionGeneral();


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
                            <Box >
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
                                            error={validation.tipoPersona.hasError}
                                            helperText={validation.tipoDocumento.msn}
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
                                            error={validation.nombre.hasError}
                                            helperText={validation.nombre.msn}
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
                                            error={validation.apellido.hasError}
                                            helperText={validation.apellido.msn}
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
                                            error={validation.numeroIdentificacion.hasError}
                                            helperText={validation.numeroIdentificacion.msn}
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
                                            showError={validation.ciudad}
                                            defaultValue={dataInitialState.ciudad}
                                        />

                                    </Grid>
                                    <Grid item xs={3.5} >
                                        <TextField
                                            required
                                            id="txtDireccion"
                                            label="Direccion"
                                            name="direccion"
                                            error={validation.direccion.hasError}
                                            helperText={validation.direccion.msn}
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
                                            error={validation.correo.hasError}
                                            helperText={validation.correo.msn}
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
                                            error={validation.telefono.hasError}
                                            helperText={validation.telefono.msn}
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
                                            showError={validation.actividadEconomica}
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
                                            onClick={handleGuardar}
                                            loading={isSaving}
                                            endIcon={<SaveIcon />}>Guardar</LoadingButton>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12}>
                                    <InfSISO></InfSISO>
                                </Grid>
                            </Box>
                        </Grid>
                }




            </Box>




        </>

    )
}
export default InformacionGeneralPage;