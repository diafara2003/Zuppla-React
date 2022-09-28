import { List, ListItem, ListItemText, Menu, MenuItem } from "@mui/material";
import React from "react";

export const DatosNotifiaciones = () =>{
    const options = [
        'Gestion proveedores',
        'Licitaciones'        
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
    return(
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
                        aria-label="Datos de notificaciones:"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClickListItem}
                    >
                        <ListItemText
                            primary="Datos de notificaciones:"
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
        </>
    );
}