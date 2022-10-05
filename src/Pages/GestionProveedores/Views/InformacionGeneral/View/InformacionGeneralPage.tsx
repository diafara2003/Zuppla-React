import { Autocomplete, Backdrop, Box, Button, Card, CardContent, CircularProgress, FormControlLabel, Grid, MenuItem, Paper, Stack, Switch, TextField, Typography } from "@mui/material"
import SaveIcon from '@mui/icons-material/Save';
import React, { useContext } from "react";

import { controllerInformacionGeneral } from "../Controller/controllerInformacionGeneral";
import { HeaderComponent } from "../../../../../SharedComponents/Header";
import { Add } from "@mui/icons-material";
import HistoryIcon from '@mui/icons-material/History';


export const InformacionGeneralPage = () => {

    const { isLoadingCarga, dataInitialState } = controllerInformacionGeneral();
    const [valorSel, setvalorSel] = React.useState('');

    const topCiudad = [
        { label: 'Bogota', year: 1994 },
        { label: 'Cali', year: 1972 },
        { label: 'Medellin', year: 1974 },
        { label: 'Barranquilla', year: 2008 },
        { label: 'Cartagena', year: 1957 },
        { label: "Villavicencio", year: 1993 }
    ];

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setvalorSel(event.target.value as string);
    };
    const top100Films = [
        { label: 'Prueba', year: 1994 },
        { label: 'Prueba', year: 1972 },
        { label: 'Prueba', year: 1974 },
        { label: 'Prueba', year: 2008 },
        { label: 'Prueba', year: 1957 },
        { label: "Prueba", year: 1993 },
        { label: 'Prueba', year: 1994 }
    ];
    return (
        <>
            <HeaderComponent title={"Información general"} />
            <Box display={"flex"} justifyContent={"end"} pt={"10px"}>
                    <Button variant="text" > <HistoryIcon sx={{ mr: "8px" }} />Historial</Button>
                    
                </Box>
            <Box sx={{ minWidth: 275, p: 2, mt: 7 }}>
                {
                    isLoadingCarga == true
                        ?
                        <Backdrop
                            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open={true}
                        >
                            <CircularProgress color="inherit" />
                        </Backdrop>
                        :
                        <Grid sx={{}}>
                            <form>
                                <Grid container width={'100%'} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                                    <Grid item xs={3.5} sx={{ m: 1 }}>
                                        <TextField
                                            id=""
                                            label="Tipo persona"
                                            value={dataInitialState.tipoPersona}
                                            // placeholder={dataInitialState.tipoPersona}
                                            defaultValue={dataInitialState.tipoPersona}
                                            fullWidth
                                            // onChange={handleChange}
                                            disabled
                                        />
                                        {/* <MenuItem value={10}>Natural</MenuItem>
                        <MenuItem value={20}>Juridica</MenuItem> */}

                                        {/* </TextField> */}
                                    </Grid>

                                    <Grid item xs={3.5} sx={{ m: 1 }}>
                                        <TextField
                                            required
                                            id=""
                                            label="Nombres"
                                            defaultValue={dataInitialState.nombre}
                                            value={dataInitialState.nombre}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={3.5} sx={{ m: 1 }}>
                                        <TextField
                                            required
                                            id=""
                                            label="Apellidos"
                                            defaultValue={dataInitialState.apellido}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={3.5} sx={{ m: 1 }}>
                                        <TextField
                                            required
                                            id=""
                                            label="Identificación"
                                            defaultValue={dataInitialState.numeroIdentificacion}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={3.5} sx={{ m: 1 }}>
                                        <TextField
                                            required
                                            id=""
                                            label="Ciudad"
                                            defaultValue={dataInitialState.ciudad?.nombre}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={3.5} sx={{ m: 1 }}>
                                        <TextField
                                            required
                                            id=""
                                            label="Direccion"
                                            defaultValue={dataInitialState.direccion}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={3.5} sx={{ m: 1 }}>
                                        <TextField
                                            required
                                            id=""
                                            label="Correo"
                                            defaultValue={dataInitialState.correo}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={3.5} sx={{ m: 1 }}>
                                        <TextField
                                            required
                                            id=""
                                            label="Telefono"
                                            defaultValue={dataInitialState.telefono}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={3.5} sx={{ m: 1 }}>
                                        <TextField
                                            required
                                            id=""
                                            label="Pagina WEB"
                                            defaultValue={dataInitialState.paginaWeb}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={3.5} sx={{ m: 1 }}>
                                        <Autocomplete
                                            disablePortal
                                            id=""
                                            options={topCiudad}
                                            sx={{ width: 300 }}
                                            renderInput={(params) => <TextField {...params} label="Ciudad" />}
                                        />
                                    </Grid>
                                    <Grid item xs={3.5} sx={{ m: 1 }}>
                                        <FormControlLabel sx={{ margin: 2, fontSize: '12px !important' }} control={<Switch defaultChecked />} label="Se encuentra certificado en normas ISO" />
                                    </Grid>
                                    <Grid item xs={3.5} sx={{ m: 1 }}>

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
