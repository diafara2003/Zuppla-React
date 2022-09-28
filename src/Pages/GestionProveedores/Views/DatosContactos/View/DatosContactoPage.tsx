import { Autocomplete, Box, Button, FormControlLabel, Grid, List, ListItem, ListItemText, Menu, MenuItem, Paper, Stack, Switch, TextField } from "@mui/material";
import React from "react";
import SaveIcon from '@mui/icons-material/Save';

export const DatosContactos = () => {
    const [valorSel, setvalorSel] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setvalorSel(event.target.value as string);
    };
    const options = [
        'Representante legal',
        'Responsable de pedidos',
        'Responsable de contratos',
        'Responsable de actas para facturacion',
        'Comercial',
        'Cartera',
    ];
    const topCiudad = [
        { label: 'Bogota', year: 1994 },
        { label: 'Cali', year: 1972 },
        { label: 'Medellin', year: 1974 },
        { label: 'Barranquilla', year: 2008 },
        { label: 'Cartagena', year: 1957 },
        { label: "Villavicencio", year: 1993 }
    ];
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (
        event: React.MouseEvent<HTMLElement>,
        index: number,
    ) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <>
            <Paper elevation={0} sx={{ minWidth: 275, p: 0 }}>
                <Box style={{ margin: '0px', padding: '0px' }}>
                    <List
                        component="nav"
                        aria-label=""
                        sx={{ bgcolor: 'background.paper' }}
                    >
                        <ListItem
                            button
                            id="lock-button"
                            aria-haspopup="listbox"
                            aria-controls="lock-menu"
                            aria-label="Datos contacto:"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClickListItem}
                        >
                            <ListItemText
                                primary="Datos contacto:"
                                secondary={options[selectedIndex]}
                            />
                        </ListItem>
                    </List>
                    <Menu
                        id="lock-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'lock-button',
                            role: 'listbox',
                        }}
                    >
                        {options.map((option, index) => (
                            <MenuItem
                                key={option}
                                disabled={index === -1}
                                selected={index === selectedIndex}
                                onClick={(event) => handleMenuItemClick(event, index)}
                            >
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
                <Grid sx={{}}>
                    <form>
                        <Grid container width={'100%'} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                            <Grid item xs={3} sx={{ m: 1 }}>
                                <TextField
                                    required
                                    id=""
                                    label="Nombre"
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
                                    label="Número de indentificación"
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
                                    label="Número de celular"
                                    defaultValue=""
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={3} sx={{ m: 1 }}>
                                <TextField
                                    required
                                    id=""
                                    label="Cargo"
                                    defaultValue=""
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={3} sx={{ m: 1 }}>
                                <Autocomplete
                                    disablePortal
                                    id=""
                                    options={topCiudad}
                                    sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="Ciudad" />}
                                />
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



            </Paper>
        </>
    );
}

