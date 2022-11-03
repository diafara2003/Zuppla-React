import { Grid, TextField } from '@mui/material'
import { useState } from 'react';
import { Autocompleteasync } from '../../../../../SharedComponents/Autocomplete/view/Autocompleteasync'
import { DTOKeyValue, INITIAL_NOTIFICACION, NotificacionDTO } from '../Model/TipoNotificacion'

type props = {

  saveUser: (data: NotificacionDTO) => void;
}


export const FrmUserLicitacion = ({ saveUser }: props) => {

  const [newData, setNewData] = useState<NotificacionDTO>(INITIAL_NOTIFICACION);

  const selectedData = (value: DTOKeyValue, name: string) => {

    if (value.id != undefined) {

      setNewData({ ...newData, [name]: value.id });
      saveUser({ ...newData, [name]: value.id });
      console.log({ ...newData, [name]: value.id });
    }
  }


  const onInputChange = (e: React.SyntheticEvent) => {
    const { name, value } = (e.target as HTMLInputElement);
    setNewData({
      ...newData,
      [name]: value
    });
    console.log({ ...newData, [name]: value });
  }



  return (
    <>
      <Grid container
        spacing={2}
        width={'100%'}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        p={1}>

        <Grid item xs={12}>
          <Autocompleteasync
            label="Buscar usuario para notificación"
            method="Usuario?tipo=p&filter="
            nombreDataOcject="nombre"
            fnSeleted={(value) => { selectedData(value as DTOKeyValue, "usuario") }}
          />
        </Grid>
        <Grid item xs={12}>
          <Autocompleteasync
            label="Buscar constructora"
            method="Constructora?filter="
            nombreDataOcject="nombre"
            fnSeleted={(value) => { selectedData(value as DTOKeyValue, "constructora") }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="txtzona"
            label="Zona"
            name="zona"
            onChange={onInputChange}
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item xs={6}>
          <Autocompleteasync
            label="Buscar categoria"
            method="EspecialidadERP/Categorias?filter="
            nombreDataOcject="nombre"
            fnSeleted={(value) => { selectedData(value as DTOKeyValue, "categoria") }}
          />
        </Grid>
      </Grid>
    </>
  )
}
