import { Box, Button, Card, CardActions, CardContent, CardHeader, Divider, Grid, Skeleton, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { UseHistorial } from '../Hook/UseHistorial';
import { AuditoriaGeneralDTO, TiposAuditoria } from '../Model/Historial-Model';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import { Stack } from '@mui/system';
import { CardModificacion } from '../Components/CardModificacion';
import { SinInformacion } from '../../../Pages/GestionProveedores/Components/ImgComponents/View/SinInformacion';
import { CardInsercion } from '../Components/CardInsercion';
import { CardEliminacion } from '../Components/CardEliminacion';
import { SkeletonDinamic } from '../../Skeleton/view/SkeletonDynamic';
type props = {
  onClose: (estado: boolean) => void,
  _tipoAuditoria: TiposAuditoria
}
export const HistorialComponent = ({ onClose, _tipoAuditoria }: props) => {
  let _isNew = true;
  let _isDelete = false;

  const { stateAuditoria, setStateTipo, isLoading } = UseHistorial(_tipoAuditoria, _isDelete, _isNew)
  const [valueTab, setValueTab] = useState(0);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    //TAB INSERCION
    if (newValue == 0) {
      setStateTipo({ isDelete: false, isNew: true })
    }
    //TAB MODIFICACION
    if (newValue == 1) {
      setStateTipo({ isDelete: false, isNew: false })
    }
    //TAB ELIMINACION
    if (newValue == 2) {
      setStateTipo({ isDelete: true, isNew: false })
    }
    setValueTab(newValue);
  };

  const cerrarHistorial = () => {
    onClose(false);
  }
  const renderSwitch = (_auditoria: AuditoriaGeneralDTO) => {
    switch (valueTab) {
      case 0:
        return <CardInsercion auditoria={_auditoria} _tipoAuditoria={_tipoAuditoria} />
        break;
      case 1:
        return <CardModificacion auditoria={_auditoria} _tipoAuditoria={_tipoAuditoria} />
        break;
      case 2:
        return <CardEliminacion auditoria={_auditoria} _tipoAuditoria={_tipoAuditoria} />
        break;

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
                stateAuditoria.map((_audit) => {
                  return (<> {renderSwitch(_audit)}</>)
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
