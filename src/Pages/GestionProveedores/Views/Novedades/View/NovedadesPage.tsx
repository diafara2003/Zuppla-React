
import { TabPanel } from '@mui/lab';
import { Box, Grid, Tab, Tabs, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useState } from 'react';
import { HeaderComponent } from '../../../../../SharedComponents/Header'
import { SinInformacion } from '../../../Components/ImgComponents/View/SinInformacion';
import { SelectConstructora } from '../../../Components/SelectorConstructora/View/SelectConstructora';
import { CardNovedades } from '../Components/CardNovedades/View/CardNovedades';
import { useNovedades } from '../Hook/useNovedades';

export const NovedadesPage = () => {
  const { dataNovedades, consultarNovedades } = useNovedades();
  const [valueTab, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
  };

  return (
    <>
      <HeaderComponent title={"Novedades"} />
      <Grid container spacing={2}>
        <Grid mt={2} item xs={1} md={2} >
          <SelectConstructora
            onClick={(dataConst) => {
              console.log(dataConst);
              consultarNovedades(dataConst);
            }} />
        </Grid>
        <Grid item xs={11} md={10}>
         
            <Tabs value={valueTab}
              onChange={handleChange}
              aria-label="basic tabs example"
              variant="fullWidth" centered
            >
              <Tab label="Pendientes por resolver" key={"tabPendiente"} />
              <Tab label="Resueltas" key={"tabResueltas"} />
            </Tabs>
            {valueTab == 0
              ? (
                dataNovedades.length != 0
                  ? (
                    <Stack m={2} spacing={2}>{
                      dataNovedades.map((_novedad) => {
                        return (
                          _novedad.isActiva
                          ?
                          <CardNovedades novedad={_novedad} />
                          :null
                        )
                      })
                    }
                    </Stack>
                  )
                  :
                  <Box mt={2} justifyContent={'center'} display={'flex'}>
                    <SinInformacion />
                  </Box>
              )
              :
              (
                dataNovedades.filter(data => !data.isActiva).length != 0
                  ? (
                    <Stack m={2} spacing={2}>{
                      dataNovedades.map((_novedad) => {
                        return (
                          !_novedad.isActiva
                          ?
                          <CardNovedades novedad={_novedad} />
                          :null
                        )
                      })
                    }
                    </Stack>
                  )
                  :
                  <Box mt={2} justifyContent={'center'} display={'flex'}>
                    <SinInformacion />
                  </Box>
              )
            }
         
        </Grid>
      </Grid>
    </>

  )
}


export default NovedadesPage;