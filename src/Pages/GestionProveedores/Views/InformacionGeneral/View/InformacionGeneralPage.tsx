import { Box, Button, Card, CardContent, FormControlLabel, Grid, MenuItem, Paper, Stack, Switch, TextField, Typography } from "@mui/material"
import SaveIcon from '@mui/icons-material/Save';
import React from "react";



export const InformacionGeneralPage = () => {

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
            <Grid sx={{}}>
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
                                defaultValue=""
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

            {/* <Divider />
            <Grid container width={'100%'} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <Grid item xs={12} sx={{ mt: 3 }}>
                    <Autocomplete
                        disablePortal
                        id=""
                        options={top100Films}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Especialidad" />}
                        fullWidth
                    />
                </Grid>

            </Grid>
            <Grid item xs={12} sx={{ m: 1 }} >
                <nav aria-label="main mailbox folders">
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <VerifiedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Inbox" />
                                <IconButton edge="end" aria-label="delete">
                                    <DeleteForeverIcon sx={{ color: 'red' }} />
                                </IconButton>
                            </ListItemButton>

                        </ListItem>
                        <Divider />
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <VerifiedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Drafts" />
                                <IconButton edge="end" aria-label="delete">
                                    <DeleteForeverIcon sx={{ color: 'red' }} />
                                </IconButton>
                            </ListItemButton>
                        </ListItem>
                        <Divider />
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <VerifiedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Inbox" />
                                <IconButton edge="end" aria-label="delete">
                                    <DeleteForeverIcon sx={{ color: 'red' }} />
                                </IconButton>
                            </ListItemButton>
                        </ListItem>
                        <Divider />
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <VerifiedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Drafts" />
                                <IconButton edge="end" aria-label="delete">
                                    <DeleteForeverIcon sx={{ color: 'red' }} />
                                </IconButton>
                            </ListItemButton>
                        </ListItem>
                        <Divider />
                    </List>
                </nav>
                <Box component="form" sx={{ '& .MuiTextField-root ': { m: 1, width: { xs: '40ch' } } }}
                    noValidate
                    autoComplete="off"
                >




                    <div>

                    </div>
                </Box>
            </Grid> */}
        </Paper>
    )
}
