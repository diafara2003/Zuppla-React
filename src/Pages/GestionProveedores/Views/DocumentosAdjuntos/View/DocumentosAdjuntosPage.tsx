import { Add } from '@mui/icons-material';
import { Box, Typography, Button, Tabs, Tab, Skeleton, CircularProgress, Container, Grid } from '@mui/material';
import React from 'react'
import { HeaderComponent } from '../../../../../SharedComponents/Header'
import { TableDatosNotificaciones } from '../../DatosNotificaciones/Components/TableDatosNotificaciones';
import { TableDatosNotLicitaciones } from '../../DatosNotificaciones/Components/TableDatosNotLicitaciones';
import HistoryIcon from '@mui/icons-material/History';
import { ControllerDocumentosAdjuntos } from '../Controller/ControllerDocumentosAdjuntos';
import { DocumentoAdjunto } from '../Components/DocumentoAdjunto';
import { SelectorConstructora } from '../../../Components/SelectConstructora/View/SelectorConstructora';
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
export const DocumentosAdjuntosPage = () => {
  const options = [
    { nombre: 'Documentos generales', id: 1, addTitle: "Nuevo contacto documentación" },
    { nombre: 'Documentos por empresa', id: 2, addTitle: "Nuevo contacto licitación" },

  ];
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };



  const [open, setOpen] = React.useState(false);

  const handleClickDialogOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { dataDoc, isLoading } = ControllerDocumentosAdjuntos()

  return (
    <>
      <HeaderComponent title={"Documentos adjuntos"} />
      <Box sx={{ width: '100%' }}>
        <Box display={"flex"} justifyContent={"end"} pt={"10px"}>
          <Button variant="text" onClick={handleClickDialogOpen} > <Add sx={{ mr: "8px" }} />Agregar nuevo contacto</Button>
          <Button variant="text" > <HistoryIcon sx={{ mr: "8px" }} />Historial</Button>

        </Box>
        <Box pt={1}>
          <Tabs value={value} onChange={handleChange}
            aria-label="basic tabs example"
            variant="fullWidth"
            sx={{ borderBottom: 1, borderColor: 'divider' }}
            centered>
            {options.map((opcion, index) => {
              return (<Tab label={opcion.nombre} {...a11yProps(index)} />)
            })}

          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Box m={1} mt={1}>
            {
              isLoading ?
                <Skeleton></Skeleton>
                :
                <Container sx={{ backgroundColor: 'white' }} maxWidth="lg">
                  <Grid container spacing={2} >
                    {dataDoc?.map((DocAdjunto) => {
                      return (
                        <DocumentoAdjunto dataAdjunto={DocAdjunto} />
                      )
                    })}
                  </Grid>
                </Container>
            }

          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box display={'flex'} justifyContent={'end'} m={1} mt={1}>
            <SelectorConstructora />
          </Box>
          {/* <Container sx={{ backgroundColor: 'white' }} maxWidth="lg">
            <Grid container spacing={2} >
              {dataDoc?.map((DocAdjunto) => {
                return (
                  <DocumentoAdjunto dataAdjunto={DocAdjunto} />
                )
              })}
            </Grid>
          </Container> */}
        </TabPanel>
      </Box>
    </>


  )
}
