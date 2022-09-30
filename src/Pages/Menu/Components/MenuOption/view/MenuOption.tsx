import { Button, Menu, MenuItem, Typography } from '@mui/material';
import React, { useState } from 'react'
import { ExpandMore } from '@mui/icons-material';
import { Box } from '@mui/system';

export const MenuOption = () => {

  const pages = [
    { "tieneHijos": 1, "idMenu": 1, "mencodigo": "1", "descripcion": "Usuarios", "ubicacion": "", "actMenu": true, "pagAyuda": "Usuarios", "svg": "<i class=\"bx bx-user\"></i>", "menRequiereProyecto": false },
    { "tieneHijos": 0, "idMenu": 2, "mencodigo": "10", "descripcion": "Información Empresa", "ubicacion": "../GestionInfProveedores/SubMenuGIT.html", "actMenu": true, "pagAyuda": "Información Empresa", "svg": "<i class=\"bx bx-building\"></i>", "menRequiereProyecto": false },
    { "tieneHijos": 0, "idMenu": 3, "mencodigo": "20", "descripcion": "Licitaciones", "ubicacion": "../dashboard/Abastecimiento/dashboard.html", "actMenu": true, "pagAyuda": "Licitaciones", "svg": "<i class='bx bx-detail'></i>", "menRequiereProyecto": true }, { "tieneHijos": 1, "idMenu": 4, "mencodigo": "30", "descripcion": "Informes", "ubicacion": "", "actMenu": true, "pagAyuda": "Informes", "svg": "<i class='bx bxs-coin-stack'></i>", "menRequiereProyecto": false }, { "tieneHijos": 1, "idMenu": 15, "mencodigo": "80", "descripcion": "Proveedores", "ubicacion": "", "actMenu": true, "pagAyuda": "Proveedores", "svg": "<i class='bx bxs-user-detail'></i>", "menRequiereProyecto": false }]
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {pages.map(({ descripcion, ubicacion, tieneHijos, mencodigo }) => (

        <Box key={`box${mencodigo}`}>
          <Button
            key={mencodigo}
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            endIcon={<ExpandMore />}
            onClick={handleClick}
            sx={{ color: '#003972' }}
          >
            {descripcion}
          </Button>
          {tieneHijos == 0 ? null :
            <Menu
              key={`menu${mencodigo}`}
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem key={`Profile${mencodigo}`} onClick={handleClose}>Profile</MenuItem>
              <MenuItem key={`account${mencodigo}`} onClick={handleClose}>My account</MenuItem>
              <MenuItem key={`Logout${mencodigo}`} onClick={handleClose}>Logout</MenuItem>
            </Menu>
          }

        </Box>

      ))}
    </>
  )
}
