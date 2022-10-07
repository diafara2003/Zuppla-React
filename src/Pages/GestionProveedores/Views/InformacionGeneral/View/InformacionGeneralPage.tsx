import { Autocomplete, Backdrop, Box, Button, Card, CardContent, CircularProgress, FormControlLabel, Grid, MenuItem, Paper, Skeleton, Stack, Switch, TextField, Typography } from "@mui/material"
import SaveIcon from '@mui/icons-material/Save';
import React, { useContext } from "react";
import { SkeletonInfGeneral } from '../Components/SkeletonInfGeneral'
import { controllerInformacionGeneral } from "../Controller/controllerInformacionGeneral";
import { HeaderComponent } from "../../../../../SharedComponents/Header";

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

    const topActividad = [
        { label: '1' },
        { label: '2' },
        { label: '3' },
        { label: '4' },
        { label: '5' },
        { label: '6', }
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
            <Box sx={{m: '1px', background: 'white', height: 'calc(100vh - 150px)'}}>
                {
                    isLoadingCarga == true
                        ?                       
                        <SkeletonInfGeneral />
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
                                            id=""
                                            label="Tipo persona"
                                            value={dataInitialState.tipoPersona}
                                            // placeholder={dataInitialState.tipoPersona}
                                            defaultValue={dataInitialState.tipoPersona}
                                            fullWidth
                                            // onChange={handleChange}
                                            disabled
                                            size="small"

                                        />
                                        {/* <MenuItem value={10}>Natural</MenuItem>
                        <MenuItem value={20}>Juridica</MenuItem> */}

                                        {/* </TextField> */}
                                    </Grid>

                                    <Grid item xs={3.5} >
                                        <TextField
                                            required
                                            id=""
                                            label="Nombres"
                                            defaultValue={dataInitialState.nombre}
                                            value={dataInitialState.nombre}
                                            fullWidth
                                            size="small"
                                        />
                                    </Grid>
                                    <Grid item xs={3.5} >
                                        <TextField
                                            required
                                            id=""
                                            label="Apellidos"
                                            defaultValue={dataInitialState.apellido}
                                            fullWidth
                                            size="small"
                                        />
                                    </Grid>
                                    <Grid item xs={3.5} >
                                        <TextField
                                            required
                                            id=""
                                            label="Identificación"
                                            defaultValue={dataInitialState.numeroIdentificacion}
                                            fullWidth
                                            size="small"
                                        />
                                    </Grid>
                                    <Grid item xs={3.5} >

                                        <Autocomplete
                                            disablePortal
                                            id=""
                                            //value={dataInitialState.ciudad?.nombre}
                                            options={topCiudad}
                                            renderInput={(params) => <TextField {...params} size="small" label="Ciudad" value={dataInitialState.ciudad?.nombre} defaultValue={dataInitialState.ciudad?.nombre} />}
                                        />
                                        {/* <TextField
                                            required
                                            id=""
                                            label="Ciudad"
                                            defaultValue={dataInitialState.ciudad?.nombre}
                                            fullWidth
                                        /> */}
                                    </Grid>
                                    <Grid item xs={3.5} >
                                        <TextField
                                            required
                                            id=""
                                            label="Direccion"
                                            defaultValue={dataInitialState.direccion}
                                            fullWidth
                                            size="small"
                                        />
                                    </Grid>
                                    <Grid item xs={3.5} >
                                        <TextField
                                            required
                                            id=""
                                            label="Correo"
                                            defaultValue={dataInitialState.correo}
                                            fullWidth
                                            size="small"
                                        />
                                    </Grid>
                                    <Grid item xs={3.5} >
                                        <TextField
                                            required
                                            id=""
                                            label="Telefono"
                                            defaultValue={dataInitialState.telefono}
                                            fullWidth
                                            size="small"
                                        />
                                    </Grid>
                                    <Grid item xs={3.5} >
                                        <TextField
                                            required
                                            id=""
                                            label="Pagina WEB"
                                            defaultValue={dataInitialState.paginaWeb}
                                            fullWidth
                                            size="small"
                                        />
                                    </Grid>
                                    <Grid item xs={3.5} >
                                        <Autocomplete
                                            disablePortal
                                            id=""
                                            fullWidth
                                            options={topActividad}
                                            renderInput={(params) => <TextField {...params} label="Actividad economica" size="small" />}
                                        />
                                    </Grid>
                                    <Grid item xs={7} >
                                        <FormControlLabel  sx={{fontSize: '12px !important', ml:1}} control={ <Switch defaultChecked size="small"  /> } label="Se encuentra certificado en normas ISO" />
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