

import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Slide, Tab, Tabs, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { useState } from 'react';
import { TransitionProps } from 'react-transition-group/Transition';
import { HeaderComponent } from '../../../../../SharedComponents/Header'
import { SinInformacion } from '../../../Components/ImgComponents/View/SinInformacion';
import { SelectConstructora } from '../../../Components/SelectorConstructora/View/SelectConstructora';
import { CardNovedades } from '../Components/CardNovedades/View/CardNovedades';
import { useNovedades } from '../Hook/useNovedades';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export const NovedadesPage = () => {
  const { dataNovedades, consultarNovedades, handleClose, openDialog, openModal, setIdOpen, setDataNovedades, handleChange, valueTab } = useNovedades();


  return (
    <>
      <HeaderComponent title={"Novedades"} />
      <Grid container spacing={4} p={2}>
        <Grid mt={2} item xs={2} md={3} >
          <SelectConstructora
            onClick={(dataConst) => {

              consultarNovedades(dataConst);
            }} />
        </Grid>
        <Grid item xs={8} md={9} >

          <Tabs value={valueTab}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{ borderBottom: 1, borderColor: 'divider' }}
          // variant="fullWidth" centered
          >

            <Tab label="Pendientes por resolver" key={"tabPendiente"} />
            <Tab label="Resueltas" key={"tabResueltas"} />
          </Tabs>

          {dataNovedades.length != 0
            ? (

              <Box mt={2} style={{ overflow: 'auto', maxHeight: 'calc(100vh - 16rem)' }}>
                <Stack m={2} spacing={2}>
                  {dataNovedades.map((_novedad, index) => {
                    if (_novedad.ischecked == undefined) _novedad.ischecked = false;
                    return (

                      < CardNovedades
                        key={`cardNovidad${_novedad.numero}`}
                        novedad={_novedad}
                        numNovedad={(index + 1)
                        }

                        clickFinaliza={(_number) => {
                          setDataNovedades(dataNovedades.map(c => {

                            if (c.numero == _number) c.ischecked = true;

                            return c
                          }));
                          setIdOpen(_number);
                          openModal();
                        }} />

                    )
                  })
                  }
                </Stack>
              </Box>

            )
            :
            <Box mt={2} justifyContent={'center'} display={'flex'}>
              <SinInformacion />
            </Box>
          }
        </Grid>
      </Grid>

      <Dialog
        open={openDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle fontWeight={600} color={'inherit'}>{"Notificar a la constructora"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Typography fontWeight={600}>¿Esta seguro que desa cerrar la novedad?</Typography>
            <Typography mt={1} >Al cerrarla se le notificará a la constructora para continuar con la validación</Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='text' color='error' onClick={() => { handleClose(false) }}>Cancelar</Button>
          <Button variant='outlined' color='primary' onClick={() => handleClose(true)}>Aceptar</Button>
        </DialogActions>
      </Dialog>

    </>

  )
}


export default NovedadesPage;