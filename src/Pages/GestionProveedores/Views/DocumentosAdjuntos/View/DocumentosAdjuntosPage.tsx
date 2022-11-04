
import { Box, Typography, Tabs, Tab, Container, Grid, Card, CardHeader, CardContent } from '@mui/material';
import React from 'react'
import { HeaderComponent } from '../../../../../SharedComponents/Header'
import { SelectorConstructora } from '../../../Components/SelectConstructora/View/SelectorConstructora';
import { SkeletonDinamic } from "../../../../../SharedComponents/Skeleton/view/SkeletonDynamic";
import { SinInformacion } from '../../../Components/ImgComponents/View/SinInformacion';
import { useDocumentosAdjuntos } from '../hook/useDocumentosAdjuntos';
import { UploadDocument } from '../../../../../SharedComponents/Documento';
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
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
          {children}
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

  const { dataDoc, dataAdjPorConst, isLoading, setDataConst, storeUsuario } = useDocumentosAdjuntos();

  return (
    <>
      <HeaderComponent title={"Documentos adjuntos"} />
      <Box sx={{ width: '100%' }}>

        <Box pt={1}>
          <Tabs value={value} onChange={handleChange}
            aria-label="basic tabs example"
            variant="fullWidth"
            sx={{ borderBottom: 1, borderColor: 'divider' }}
            centered>
            {options.map((opcion, index) => {
              return (<Tab key={`tab-key-${opcion.nombre}`} label={opcion.nombre} {...a11yProps(index)} />)
            })}
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Box m={1} mt={1}>
            {
              isLoading ?
                <SkeletonDinamic NoColumnas={2} NoFilas={1} Tipo={'card'} />
                :
                <Box sx={{ backgroundColor: 'white' }} maxWidth="lg">
                  <Grid container spacing={2} >

                    {dataDoc?.map((DocAdjunto) => {
                      return (
                        <Grid item xs={6} key={`div-upload-tab0-id${DocAdjunto.tipoAdjunto.id}`}>
                          <UploadDocument
                            idOrigen={storeUsuario.user.id.toString()}
                            idOrigen2={DocAdjunto.tipoAdjunto.id.toString()}
                            tipo='tercero'
                            key={`upload-tab0-id${DocAdjunto.tipoAdjunto.id}`}
                            file={DocAdjunto}
                            uploadedCompleted={(value) => { }}
                          />
                        </Grid>
                      )
                    })}
                  </Grid>
                </Box>
            }
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box display={'flex'} justifyContent={'end'} m={1} mt={1}>
            <SelectorConstructora selected={(value) => {
              setDataConst(value)
            }} />
          </Box>
          <Box m={1} mt={1}>
            {
              isLoading ?
                <SkeletonDinamic NoColumnas={1} NoFilas={1} Tipo={'card'} />
                :

                dataAdjPorConst.length == 0
                  ?
                  <Box justifyContent={'center'} display={'flex'}>
                    <SinInformacion />
                  </Box>
                  :
                  <Container sx={{ backgroundColor: 'white' }} maxWidth="lg">
                    {dataAdjPorConst?.map((DocAdjunto) => {
                      return (
                        <Card elevation={1} sx={{ mt: 2 }}>
                          <CardHeader
                            title={DocAdjunto.nombreEspecialidad}
                            titleTypographyProps={{ fontWeight: '600' }}
                          />
                          <CardContent sx={{ mb: 3 }}>
                            <Grid container spacing={3} className={'JK'}>
                              {DocAdjunto.tiposAdjuntos.map((adjDoc) => {
                                return (
                                  <Grid item xs={6}>
                                    <UploadDocument
                                      idOrigen={storeUsuario.user.id.toString()}
                                      idOrigen2={adjDoc.tipoAdjunto.id.toString()}
                                      tipo='tercero'
                                      key={`upload-tab1-id${adjDoc.tipoAdjunto.id}`}
                                      file={adjDoc}
                                      uploadedCompleted={(value) => { }}
                                    />
                                  </Grid>
                                )
                              })}
                            </Grid>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </Container>
            }
          </Box>
        </TabPanel>
      </Box>
    </>
  )
}


export default DocumentosAdjuntosPage;