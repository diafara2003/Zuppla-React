import {Autocomplete, Box, Button, FormControlLabel, List, ListItem, ListItemText, Menu, MenuItem, Stack, Switch, TextField } from "@mui/material";
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
            <div style={{ margin: '0px', padding: '0px' }}>
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
            </div>
            <div>
            <Box width={'100%'} display={"flex"} alignItems={"center"} justifyContent={"center"} >
                <Box component="form" sx={{ '& .MuiTextField-root ': { m: 1, width: '39ch' }, }}
                    noValidate
                    autoComplete="off"
                >
                    <div>                        
                        <TextField
                            required
                            id=""
                            label="Nombres"
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
                            label="Número"
                            defaultValue=""
                        />
                        <TextField
                            required
                            id=""
                            label="Numero de identificacion"
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
                            label="Numero celular"
                            defaultValue=""
                        />
                        <TextField
                            required
                            id=""
                            label="Cargo"
                            defaultValue=""
                        />                        
                         <Autocomplete
                                    disablePortal
                                    id=""
                                    options={topCiudad}
                                    sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="Ciudad" />}
                                />                            
                    </div>
                    <div style={{ display: "flex", justifyContent: 'center', marginBottom: '25px' }}>
                        <Stack direction="row">
                            <Button variant="contained" endIcon={<SaveIcon />}>Guardar</Button>
                        </Stack>
                    </div>
                   
                   
                </Box>


            </Box>

            </div>
        </>
    );
}

