import { Box, Button, Card, CardActions, CardContent, CardHeader, Divider, Grid, Skeleton, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { UseHistorial } from '../Hook/UseHistorial';
import { AuditoriaGeneralDTO, TiposAuditoria } from '../Model/Historial-Model';
import { Stack } from '@mui/system';
import { CardModificacion } from '../Components/CardModificacion';
import { SinInformacion } from '../../../Pages/GestionProveedores/Components/ImgComponents/View/SinInformacion';
import { CardInsercion } from '../Components/CardInsercion';
import { CardEliminacion } from '../Components/CardEliminacion';
import { SkeletonDinamic } from '../../Skeleton/view/SkeletonDynamic';


type props = {
  onClose: (estado: boolean) => void,
  _tipoAuditoria: TiposAuditoria,
  idDocumento? :number
}


export const HistorialComponent = (info: props) => {
  const {_tipoAuditoria} = info

  const { stateAuditoria, isLoading,valueTab,handleChangeTab } = UseHistorial({...info,idDocumento : info.idDocumento ?? -1})

  const cerrarHistorial = () => {
    info.onClose(false);
  }
  const renderSwitch = (_auditoria: AuditoriaGeneralDTO,i:number) => {
    switch (valueTab) {
      case 0:
        return <CardInsercion key={`card-auditoria-i-${i}`} auditoria={_auditoria} _tipoAuditoria={_tipoAuditoria} />        
      case 1:
        return <CardModificacion key={`card-auditoria-u-${i}`} auditoria={_auditoria} _tipoAuditoria={_tipoAuditoria} />        
      case 2:
        return <CardEliminacion key={`card-auditoria-d-${i}`} auditoria={_auditoria} _tipoAuditoria={_tipoAuditoria} />      
      default:
        break;
    }
  }

  return (
    <Box m={2} mt={1}>
      <Grid container position={'sticky'} top={60} sx={{ backgroundColor: 'white' }}>
        <Grid item xl={10} lg={10} >
          <Tabs value={valueTab}
            onChange={handleChangeTab}
            sx={{ borderBottom: 1, borderColor: 'divider' }}
            aria-label="">
            <Tab label="Agregado" key={"tabAgregado"} />
            <Tab label="Modificado" key={"tabModificado"} />
            <Tab label="Eliminado" key={"tabEliminado"} />
          </Tabs>
        </Grid>
        <Grid item xl={2} lg={2} >
          <Box display={"flex"} justifyContent={"end"}>
            <Button variant="text" onClick={cerrarHistorial}> <ExitToAppIcon sx={{ mr: "8px" }} />Salir del historial</Button>
          </Box>
        </Grid>
      </Grid>
      <Box mt={2} ml={25} mr={25} sx={{ overflow: 'auto', maxHeight: 'calc(100vh - 15rem)' }}>
        <Stack m={2} spacing={2}>
          {
            isLoading
              ?
              <SkeletonDinamic NoColumnas={1} NoFilas={3} Tipo={'table'} />
              :
              stateAuditoria.length != 0
                ?
                stateAuditoria.map((_audit,i) => {
                  return (<Box key={`div-auditoria-${i}`}> {renderSwitch(_audit,i)}</Box>)
                })
                :
                <Box mt={2} justifyContent={'center'} display={'flex'}>
                  <SinInformacion />
                </Box>

          }
        </Stack>
      </Box>
    </Box>
  )
}
