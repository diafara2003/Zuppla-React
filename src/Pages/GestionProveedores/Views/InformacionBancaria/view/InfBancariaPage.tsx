import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import { HeaderComponent } from '../../../../../SharedComponents/Header';
import { useInfBancaria } from '../hook/useInfBancatia';
import { SkeletonDinamic } from '../../../../../SharedComponents/Skeleton/view/SkeletonDynamic';
import HistoryIcon from '@mui/icons-material/History';
import { Autocompleteasync } from '../../../../../SharedComponents/Autocomplete/view/Autocompleteasync';
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';

export const InfBancariaPage = () => {

    const { isLoading, handleChange, handleguardar, isSaving, onInputChange, state, validation, selectedCiudad } = useInfBancaria();
    return (
        <>
            <HeaderComponent title={"Información bancaria"} />

            <Box sx={{ m: '1px', background: 'white', height: 'calc(100vh - 150px)' }}>
                {isLoading
                    ? <Box m={5}>
                        <SkeletonDinamic NoColumnas={3} NoFilas={4} Tipo={'formulario'} />
                    </Box>
                    : <Grid sx={{ minWidth: 275, p: 2 }}>
                        <Box display={"flex"} justifyContent={"end"}>
                            <Button variant="text" > <HistoryIcon sx={{ mr: "8px" }} />Historial</Button>
                        </Box>
                        <Box>
                            <Grid container width={'100%'}
                                display={"flex"}
                                alignItems={"center"}
                              
                                spacing={2}
                                mt={0}>
                                <Grid item xs={3.5} >
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Banco</InputLabel>
                                        <Select
                                            size="small"
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Age"
                                        >
                                            <MenuItem value={"cc"}>Cédula de ciudadanía</MenuItem>
                                            <MenuItem value={"NIT"}>NIT</MenuItem>
                                            <MenuItem value={"ce"}>Cédula de extranjeria</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={3.5} >
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Tipo de cuenta</InputLabel>
                                        <Select
                                            size="small"
                                            name="tipocuenta"
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Age"
                                        >
                                            <MenuItem value={"cc"}>Cédula de ciudadanía</MenuItem>
                                            <MenuItem value={"NIT"}>NIT</MenuItem>
                                            <MenuItem value={"ce"}>Cédula de extranjeria</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={3.5} >
                                    <TextField
                                        id="txtnumero"
                                        label="Número de cuenta"
                                        value={state.numero}
                                        fullWidth
                                        name="numero"
                                        error={validation.numero.hasError}
                                        helperText={validation.numero.msn}
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
                                        defaultValue={{ id: state.ciudad, nombre: state.ciudadTexto }}
                                    />
                                </Grid>

                                <Grid item xs={3.5} >
                                    <TextField
                                        id="txtcorreopago"
                                        label="Correo notificación pagos"
                                        value={state.numero}
                                        fullWidth
                                        name="numero"
                                        error={validation.numero.hasError}
                                        helperText={validation.numero.msn}
                                        onChange={onInputChange}
                                        size="small"

                                    />
                                </Grid>
                            </Grid>
                            <Grid style={{ display: "flex", justifyContent: 'end', marginBottom: '25px', marginRight: '150px' }}>
                                <Stack direction="row">
                                    <LoadingButton
                                        type="submit"
                                        loadingPosition="end"
                                        variant="contained"
                                        onClick={handleguardar}
                                        loading={isSaving}
                                        endIcon={<SaveIcon />}>Guardar</LoadingButton>
                                </Stack>
                            </Grid>
                        </Box>
                    </Grid>}
            </Box>
        </>
    )
}

export default InfBancariaPage;
