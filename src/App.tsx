import { useEffect, useState } from 'react'

import { styled } from '@mui/material/styles';
import { Box, Button, Container, CssBaseline, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Paper, Select, SelectChangeEvent, Stack, Switch, Tab, Tabs, TextField } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import PermDeviceInformationIcon from '@mui/icons-material/PermDeviceInformation';
import ContactsIcon from '@mui/icons-material/Contacts';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import DescriptionIcon from '@mui/icons-material/Description';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import React from 'react';
import { display, margin, padding } from '@mui/system';
import { Padding } from '@mui/icons-material';
import { DatosEmpresa } from './DatosEmpresa';
import { DatosContactos } from './DatosContacto';

function App() {


  const [value, setValue] = useState(0);

  const Selected = (event: React.SyntheticEvent, newValue: number) => {

    setValue(newValue);
  }
  const [valorSel, setvalorSel] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setvalorSel(event.target.value as string);
  };


  return (
    <>

      <Container fixed>
        {/* ==============Tab menu==================== */}
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"} marginBottom={2}>
          <Tabs value={value} onChange={Selected} aria-label="icon label tabs example">
            <Tab icon={<PermDeviceInformationIcon />} label="Información General" />
            <Tab icon={<ContactsIcon />} label="Contactos" />
            <Tab icon={<ContactMailIcon />} label="Datos Notificaciones" />
            <Tab icon={<FilePresentIcon />} label="Documentos" />
            <Tab icon={<DescriptionIcon />} label="Camara de comercio" />
            <Tab icon={<NotificationsActiveIcon />} label="Novedades" />
          </Tabs>
        </Box>

        {
          
          (value == 0 ? <DatosEmpresa /> : <DatosContactos />)
        }

      </Container>
    </>
  )
}

export default App
