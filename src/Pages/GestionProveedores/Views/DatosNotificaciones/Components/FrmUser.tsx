import { Box, Grid, Typography } from '@mui/material'
import { Autocompleteasync } from '../../../../../SharedComponents/Autocomplete/view/Autocompleteasync'
import { useState } from 'react';
import { DTOKeyValue } from '../Model/TipoNotificacion';
import {  INITIAL_USUARIO_DTO, UsuariosDTO } from '../../../../Usuarios/Views/usuario/model/usuarioDTO';



export const FrmUser = () => {

  const [user, setUser] = useState<UsuariosDTO>(INITIAL_USUARIO_DTO);

  const selectedUsuario = (value: DTOKeyValue) => {
    setUser((value as UsuariosDTO));
  }


  return (

    <Grid container
      spacing={2}
      width={'100%'}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      p={1}>

      <Grid item xs={12}>
        <Autocompleteasync
          label="Usuario para notificación"
          method="Usuario?tipo=p&filter="
          nombreDataOcject="nombre"
          fnSeleted={(value) => { selectedUsuario(value as DTOKeyValue) }}

        />
      </Grid>

      
        <Grid item xs={6}>
          <Typography>Correo</Typography>
          
        </Grid>
        <Grid item xs={6}>
          Hola2
        </Grid>
      

    </Grid>

  )
}
