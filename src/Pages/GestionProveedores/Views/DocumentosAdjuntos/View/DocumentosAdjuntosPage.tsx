
import { Box, Tabs, Tab, Container, Grid, Card, CardHeader, CardContent, Button, Typography } from '@mui/material';
import React, { useState } from 'react'
import { HeaderComponent } from '../../../../../SharedComponents/Header'
import { SelectorConstructora } from '../../../Components/SelectConstructora/View/SelectorConstructora';
import { SkeletonDinamic } from "../../../../../SharedComponents/Skeleton/view/SkeletonDynamic";
import { SinInformacion } from '../../../Components/ImgComponents/View/SinInformacion';
import { useDocumentosAdjuntos } from '../hook/useDocumentosAdjuntos';
import { UploadDocument } from '../../../../../SharedComponents/Documento';
import HistoryIcon from '@mui/icons-material/History';
import { DocHistorial } from '../Components/DocHistororial/view/DocHistorial';
import { SelectConstructora } from '../../../Components/SelectorConstructora/View/SelectConstructora';
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
    { nombre: 'Documentos generales', id: 1 },
    { nombre: 'Documentos por empresa', id: 2 },
  ];
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const { dataDoc, dataAdjPorConst, isLoading, setDataConst, storeUsuario } = useDocumentosAdjuntos();
  //Historial
  const [openHistorial, setOpenHistorial] = useState(false);
  const MostrarHistorial = () => {
    setOpenHistorial(true);
  }
  return (
    <>
      <HeaderComponent title={`${openHistorial ? 'Historial' : ''} Documentos adjuntos`} />
      {
        !openHistorial ?
          <Box sx={{ width: '100%' }}>

            <Box pt={1}>
              <Grid container>
                <Grid item xl={11} lg={10} >
                  <Tabs value={value} onChange={handleChange}
                    aria-label="basic tabs example"

                    sx={{ borderBottom: 1, borderColor: 'divider' }}
                  >
                    {options.map((opcion, index) => {
                      return (<Tab key={`tab-key-${opcion.nombre}`} label={opcion.nombre} {...a11yProps(index)} />)
                    })}
                  </Tabs>
                </Grid>
                <Grid item xl={1} lg={2}>
                  <Box display={"flex"} justifyContent={"end"} pt={"10px"} pr={5}>
                    <Button variant="text" onClick={MostrarHistorial}> <HistoryIcon sx={{ mr: "8px" }} />Historial</Button>
                  </Box>
                </Grid>

              </Grid>
            </Box>
            <TabPanel value={value} index={0}>
              <Box m={1} mt={1} sx={{ justifyContent: 'center', display: 'flex' }} className='JKDoc'>
                {
                  isLoading ?
                    <SkeletonDinamic NoColumnas={2} NoFilas={6} Tipo={'formulario'} />
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
              <Grid container spacing={1} >
                <Grid mt={2} item xs={2} md={3} sx={{ borderRight: "1px solid #e9e9e9" }}>
                  <SelectConstructora
                    onClick={(dataConst) => {
                      setDataConst(dataConst)
                    }} />
                </Grid>
                <Grid item xs={8} md={9} >
                  <Box>
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
                                <Card variant='outlined'>
                                  <CardHeader                                  
                                    title={ <Typography fontWeight={600} variant={'subtitle1'}>{DocAdjunto.nombreEspecialidad}</Typography>}                                    
                                   
                                  />
                                  <CardContent sx={{ mb: 3 }}>
                                    <Grid container spacing={3}>
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
                </Grid>
              </Grid>
            </TabPanel>
          </Box>
          :
          <Grid container spacing={2} >
            <Grid item xs={12}>
              <DocHistorial
                onClose={(estado) => {
                  setOpenHistorial(estado);
                }}
              />
            </Grid>
          </Grid>
      }

    </>
  )
}


export default DocumentosAdjuntosPage;