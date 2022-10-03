import { Box, Button, Card, CardContent, FormControlLabel, Grid, MenuItem, Paper, Stack, Switch, TextField, Typography } from "@mui/material"
import SaveIcon from '@mui/icons-material/Save';
import React, { useContext } from "react";
import { AuthContext } from "../../../../../Auth";
import { json } from "react-router-dom";
import { controllerInformacionGeneral } from "../Controller/controllerInformacionGeneral";



export const InformacionGeneralPage = () => {
    
    const {  isLoading } = controllerInformacionGeneral();
    const [valorSel, setvalorSel] = React.useState('');


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
        <Paper elevation={0} sx={{ minWidth: 275, p: 2 }}>
            {
                 isLoading ? <div> Cargando...</div> :   <Grid sx={{}}>
                 <form>
                     <Grid container width={'100%'} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                         <Grid item xs={3} sx={{ m: 1 }}>
                             <TextField
                                 id=""
                                 select
                                 label="Tipo persona"
                                 value={valorSel}
                                 placeholder={valorSel}
                                 fullWidth
                                 onChange={handleChange}
                                 disabled
                             >
                                 <MenuItem value={10}>Natural</MenuItem>
                                 <MenuItem value={20}>Juridica</MenuItem>
 
                             </TextField>
                         </Grid>
 
                         <Grid item xs={3} sx={{ m: 1 }}>
                             <TextField
                                 required
                                 id=""
                                 label="Nombres"
                                 defaultValue=""
                                 fullWidth
                             />
                         </Grid>
                         <Grid item xs={3} sx={{ m: 1 }}>
                             <TextField
                                 required
                                 id=""
                                 label="Apellidos"
                                 defaultValue={1}
                                 fullWidth
                             />
                         </Grid>
                         <Grid item xs={3} sx={{ m: 1 }}>
                             <TextField
                                 required
                                 id=""
                                 label="Identificación"
                                 defaultValue=""
                                 fullWidth
                             />
                         </Grid>
                         <Grid item xs={3} sx={{ m: 1 }}>
                             <TextField
                                 required
                                 id=""
                                 label="Ciudad"
                                 defaultValue=""
                                 fullWidth
                             />
                         </Grid>
                         <Grid item xs={3} sx={{ m: 1 }}>
                             <TextField
                                 required
                                 id=""
                                 label="Direccion"
                                 defaultValue=""
                                 fullWidth
                             />
                         </Grid>
                         <Grid item xs={3} sx={{ m: 1 }}>
                             <TextField
                                 required
                                 id=""
                                 label="Correo"
                                 defaultValue=""
                                 fullWidth
                             />
                         </Grid>
                         <Grid item xs={3} sx={{ m: 1 }}>
                             <TextField
                                 required
                                 id=""
                                 label="Telefono"
                                 defaultValue=""
                                 fullWidth
                             />
                         </Grid>
                         <Grid item xs={3} sx={{ m: 1 }}>
                             <TextField
                                 required
                                 id=""
                                 label="Pagina WEB"
                                 defaultValue=""
                                 fullWidth
                             />
                         </Grid>
                         <Grid item xs={3} sx={{ m: 1 }}>
                             <TextField id="" select label="Actividad economica" value={valorSel}
                                 onChange={handleChange}
                                 fullWidth
                             >
                                 <MenuItem value={10}>prueba</MenuItem>
                                 <MenuItem value={20}>2</MenuItem>
                             </TextField>
                         </Grid>
                         <Grid item xs={3} sx={{ m: 1 }}>
                             <FormControlLabel sx={{ margin: 2, fontSize: '12px !important' }} control={<Switch defaultChecked />} label="Se encuentra certificado en normas ISO" />
                         </Grid>
                         <Grid item xs={3} sx={{ m: 1 }}>
 
                         </Grid>
 
                     </Grid>
                     <Grid style={{ display: "flex", justifyContent: 'center', marginBottom: '25px' }}>
                         <Stack direction="row">
                             <Button variant="contained" endIcon={<SaveIcon />}>Guardar</Button>
                         </Stack>
                     </Grid>
                 </form>
             </Grid>   
            }
                  
        </Paper>
    )
}
