import { Box, Divider, Grid, Typography } from '@mui/material'
import { Autocompleteasync } from '../../../../../SharedComponents/Autocomplete/view/Autocompleteasync'
import { useState } from 'react';
import { DTOKeyValue } from '../Model/TipoNotificacion';
import { INITIAL_USUARIO_DTO, UsuariosDTO } from '../../../../Usuarios/Views/usuario/model/usuarioDTO';



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
          label="Buscar usuario para notificación"
          method="Usuario?tipo=p&filter="
          nombreDataOcject="nombre"
          fnSeleted={(value) => { selectedUsuario(value as DTOKeyValue) }}

        />
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>

      <Grid item xs={12}>
        <Typography>Nombre {user.nombre} </Typography>
      </Grid>


      <Grid item xs={12}>
        <Typography>Documento {user.documento}</Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography>Correo {user.correo}</Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography>Cargo {user.cargo}</Typography>
      </Grid>


    </Grid>

  )
}
