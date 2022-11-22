import { Box, Button, Divider, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import { HeaderComponent } from '../../../../../SharedComponents/Header';
import { useInfBancaria } from '../hook/useInfBancatia';
import { SkeletonDinamic } from '../../../../../SharedComponents/Skeleton/view/SkeletonDynamic';
import HistoryIcon from '@mui/icons-material/History';
import { Autocompleteasync } from '../../../../../SharedComponents/Autocomplete/view/Autocompleteasync';
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';
import { InfTributariaPages } from '../../InformacionTributaria/Views/InfTributariaPages';
import { useState } from 'react';
import { HistorialComponent } from '../../../../../SharedComponents/Historial/View/HistorialComponent';
import { TiposAuditoria } from '../../../../../SharedComponents/Historial/Model/Historial-Model';

export const InfBancariaPage = () => {

    const { isLoading, handleChange, handleguardar, isSaving, onInputChange, state, validation, selectedCiudad, stateBancos, statetipoCuenta } = useInfBancaria();

    //Historial
    const [openHistorial, setOpenHistorial] = useState(false);
    const MostrarHistorial = () => {
        setOpenHistorial(true);
    }
    return (
        <>
            <HeaderComponent title={`${openHistorial ? 'Historial' : ''} Información bancaria`} />
            {
                !openHistorial
                    ?
                    <Box sx={{ m: '1px', background: 'white', height: 'calc(100vh - 150px)' }}>
                        {
                            isLoading
                                ? <Box m={5}>
                                    <SkeletonDinamic NoColumnas={3} NoFilas={4} Tipo={'formulario'} />
                                </Box>
                                : <Grid >
                                    <Box>
                                        <Grid container width={'100%'}
                                            display={"flex"}
                                            justifyContent={"center"}
                                            spacing={2}
                                            mt={0}>
                                            <Grid item xs={10} container spacing={2}>

                                                <Grid item xs={12} style={{ display: "flex", justifyContent: 'end' }}>
                                                    <Button variant="text" onClick={MostrarHistorial} > <HistoryIcon sx={{ mr: "8px" }} />Historial</Button>
                                                </Grid>
                                                <Grid item xs={6} >
                                                    <FormControl fullWidth>
                                                        <InputLabel id="demo-simple-select-label">Banco</InputLabel>
                                                        <Select
                                                            size="small"
                                                            labelId="demo-simple-select-label"
                                                            id="demo-simple-select"
                                                            error={validation.banco.hasError}
                                                            label="Age"
                                                            value={state.banco}
                                                            onChange={(e) => { handleChange("banco", e.target.value as string) }}
                                                        >
                                                            {stateBancos.map(e => <MenuItem key={e.id} value={e.id}>{e.texto}</MenuItem>)}
                                                        </Select>
                                                        {validation.tipoCuenta.hasError && <FormHelperText>{validation.banco.msn}</FormHelperText>}
                                                    </FormControl>
                                                </Grid>

                                                <Grid item xs={6} >
                                                    <FormControl fullWidth>
                                                        <InputLabel id="demo-simple-select-label">Tipo de cuenta</InputLabel>
                                                        <Select
                                                            size="small"
                                                            name="tipocuenta"
                                                            error={validation.tipoCuenta.hasError}
                                                            value={state.tipoCuenta}
                                                            labelId="demo-simple-select-label"
                                                            id="demo-simple-select"
                                                            label="Age"
                                                            onChange={(e) => { handleChange("tipoCuenta", e.target.value as number) }}
                                                        >
                                                            {statetipoCuenta.map(e => <MenuItem key={e.id} value={e.id}>{e.codigo}</MenuItem>)}
                                                        </Select>
                                                        {validation.tipoCuenta.hasError && <FormHelperText>{validation.tipoCuenta.msn}</FormHelperText>}
                                                    </FormControl>
                                                </Grid>


                                                <Grid item xs={6} >
                                                    <TextField
                                                        id="txtnumero"
                                                        label="Número de cuenta"
                                                        value={state.numero}
                                                        fullWidth
                                                        required
                                                        name="numero"
                                                        error={validation.numero.hasError}
                                                        helperText={validation.numero.msn}
                                                        onChange={onInputChange}
                                                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                                        size="small"

                                                    />
                                                </Grid>

                                                <Grid item xs={6} >
                                                    <Autocompleteasync
                                                        label="Ciudad"
                                                        method="Ciudad?filter="
                                                        nombreDataOcject="nombre"
                                                        fnSeleted={selectedCiudad}
                                                        showError={validation.ciudad}
                                                        defaultValue={{ id: state.ciudad, nombre: state.ciudadTexto }}
                                                    />
                                                </Grid>



                                                <Grid item xs={6} >
                                                    <TextField
                                                        id="txtcorreopago"
                                                        label="Correo notificación pagos"
                                                        value={state.correoPagos}
                                                        fullWidth
                                                        required
                                                        name="correoPagos"
                                                        error={validation.correoPago.hasError}
                                                        helperText={validation.correoPago.msn}
                                                        onChange={onInputChange}
                                                        size="small"

                                                    />
                                                </Grid>

                                                <Grid item xs={12} >
                                                    <Divider />
                                                </Grid>
                                                <Grid item xs={12} >
                                                    <InfTributariaPages></InfTributariaPages>
                                                </Grid>

                                                <Grid item xs={12} style={{ display: "flex", justifyContent: 'end' }}>
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
                                            </Grid>

                                        </Grid>
                                    </Box>
                                </Grid>
                        }

                    </Box>
                    : <HistorialComponent
                        _tipoAuditoria={TiposAuditoria.InformacionBancaria}
                        onClose={(estado) => {
                            setOpenHistorial(estado);
                        }}

                    />
            }

        </>
    )
}

export default InfBancariaPage;
