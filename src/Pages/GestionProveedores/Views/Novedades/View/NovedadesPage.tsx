
import { TabPanel } from '@mui/lab';
import { Box, Grid, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import { HeaderComponent } from '../../../../../SharedComponents/Header'
import { SelectConstructora } from '../../../Components/SelectorConstructora/View/SelectConstructora';

export const NovedadesPage = () => {



  //===========================Tab panel=====================

  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <HeaderComponent title={"Novedades"} />
      <Grid container spacing={2}>
        <Grid mt={2} item xs={1} md={2} >
          <SelectConstructora />
        </Grid>
        <Grid item xs={11} md={10}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              variant="fullWidth" centered
            >
              <Tab label="Pendientes por resolver" key={"tabPendiente"} />
              <Tab label="Resueltas" key={"tabResueltas"} />
            </Tabs>


          </Box>
        </Grid>
      </Grid>
    </>

  )
}


export default NovedadesPage;