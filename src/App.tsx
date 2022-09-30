import { Badge, Box, Button, Container, CssBaseline, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Paper, Select, SelectChangeEvent, Stack, Switch, Tab, Tabs, TextField, Typography } from '@mui/material'

import PermDeviceInformationIcon from '@mui/icons-material/PermDeviceInformation';
import ContactsIcon from '@mui/icons-material/Contacts';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import DescriptionIcon from '@mui/icons-material/Description';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';


import { DatosContactos } from './Pages/GestionProveedores/Views/DatosContactos/View/DatosContactoPage';
import { LogoEmpresa } from './Pages/GestionProveedores/Components/LogoProveedor/View/LogoEmpresa';
import { CamaraComercio } from './Pages/GestionProveedores/Views/CamaraComercio/View/CamaraComercioPage';
import { DatosNotifiaciones } from './Pages/GestionProveedores/Views/DatosNotificaciones/View/DatosNotificacionesPage';

import React from 'react';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function App() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container fixed sx={{}}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', position: 'sticky', top: '0px', zIndex: '999999', backgroundColor: 'white' }} display={"flex"} alignItems={"center"} justifyContent={"center"} marginBottom={2}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab icon={<PermDeviceInformationIcon />} label="Información General" />
            <Tab icon={<ContactsIcon />} label="Contactos" {...a11yProps(0)} />
            <Tab icon={<ContactMailIcon />} label="Datos Notificaciones" {...a11yProps(1)} />
            <Tab icon={<FilePresentIcon />} label="Documentos" {...a11yProps(2)} />
            <Tab icon={<DescriptionIcon />} label="Camara de comercio"  {...a11yProps(3)} />
            <Tab icon={<Badge color="primary" badgeContent={2}>
              <NotificationsActiveIcon />
            </Badge>}
              label="Novedades"  {...a11yProps(4)} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <LogoEmpresa />
       
        </TabPanel>
        <TabPanel value={value} index={1}>
          <DatosContactos />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <DatosNotifiaciones/>
        </TabPanel>
        <TabPanel value={value} index={3}>
          En proceso...
        </TabPanel>
        <TabPanel value={value} index={4}>
          <CamaraComercio />
        </TabPanel>
      </Box>
    </Container>
  );

}
export default App
