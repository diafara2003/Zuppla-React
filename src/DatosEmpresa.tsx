import { Autocomplete, Box, Button, Divider, FormControlLabel, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem, Stack, Switch, TextField } from "@mui/material"
import React from "react";
import './App.css'
import SaveIcon from '@mui/icons-material/Save';
import VerifiedIcon from '@mui/icons-material/Verified';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export const DatosEmpresa = () => {
    const [valorSel, setvalorSel] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setvalorSel(event.target.value as string);
    };
    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
        { label: '12 Angry Men', year: 1957 },
        { label: "Schindler's List", year: 1993 },
        { label: 'Pulp Fiction', year: 1994 }
    ];


    return (
        <>
            <Box width={'100%'} display={"flex"} alignItems={"center"} justifyContent={"center"} >
                <Box component="form" sx={{ '& .MuiTextField-root ': { m: 1, width: '39ch' }, }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField id="" select label="Tipo persona" value={valorSel}
                            onChange={handleChange}
                        // helperText=""
                        >
                            <MenuItem value={10}>Natural</MenuItem>
                            <MenuItem value={20}>Juridica</MenuItem>
                        </TextField>
                        <TextField
                            required
                            id=""
                            label="Nombres"
                            defaultValue=""
                        />
                        <TextField
                            required
                            id=""
                            label="Apellidos"
                            defaultValue=""
                        />
                        <TextField
                            required
                            id=""
                            label="Identificación"
                            defaultValue=""
                        />
                        <TextField
                            required
                            id=""
                            label="Ciudad"
                            defaultValue=""
                        />
                        <TextField
                            required
                            id=""
                            label="Direccion"
                            defaultValue=""
                        />
                        <TextField
                            required
                            id=""
                            label="Correo"
                            defaultValue=""
                        />
                        <TextField
                            required
                            id=""
                            label="Telefono"
                            defaultValue=""
                        />
                        <TextField
                            required
                            id=""
                            label="Pagina WEB"
                            defaultValue=""
                        />
                        <TextField id="" select label="Actividad economica" value={valorSel}
                            onChange={handleChange}
                        // helperText=""
                        >
                            <MenuItem value={10}>prueba</MenuItem>
                            <MenuItem value={20}>2</MenuItem>
                        </TextField>
                        <FormControlLabel sx={{ margin: 2, fontSize: '12px !important' }} control={<Switch defaultChecked />} label="Se encuentra certificado en normas ISO" />
                    </div>
                    <div style={{ display: "flex", justifyContent: 'center', marginBottom: '25px' }}>
                        <Stack direction="row">
                            <Button variant="contained" endIcon={<SaveIcon />}>Guardar</Button>
                        </Stack>
                    </div>
                    {/* <div style={{ borderBottom: "1px solid lightgray", marginTop: "10px", marginBottom: '10px' }}></div> */}
                    <Divider />
                    <div className="row">
                        <Box component="form" sx={{ '& .MuiTextField-root ': { m: 2, width: '39ch' }, }}
                            noValidate
                            autoComplete="off"
                        >
                            <div >
                                <Autocomplete
                                    disablePortal
                                    id=""
                                    options={top100Films}
                                    sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="Especialidad" />}
                                />
                            </div>
                        </Box>
                    </div>
                    <div>
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
                    </div>
                </Box>


            </Box>



        </>
    )
}