import { Box, Divider, Grid, Paper, Typography } from '@mui/material'
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
    <Box
      display={"block"}
      
      width={"100%"}
      mt={1}
    >

      <Grid item xs={12}>
        <Autocompleteasync
          label="Buscar usuario para notificación"
          method="Usuario?tipo=p&filter="
          nombreDataOcject="nombre"
          fnSeleted={(value) => { selectedUsuario(value as DTOKeyValue) }}
        />
      </Grid>

      <Grid item xs={12}>
        {user.nombre == ""
          ? null
          : <Grid mt={2} item xs={12}>
            <Paper variant="outlined" elevation={1}>
              <Box p={2}>

                <Box display={"flex"} alignItems={"center"}>
                  <Typography variant='body1' fontWeight={600}>Nombre: </Typography>
                  <Typography sx={{ pl: 1 }} variant='body2'>{user.nombre} </Typography>
                </Box>


                <Box display={"flex"} alignItems={"center"}>
                  <Typography variant='body1' fontWeight={600}>Correo: </Typography>
                  <Typography sx={{ pl: 1 }} variant='body2'>{user.correo} </Typography>
                </Box>

                <Box display={"flex"} alignItems={"center"}>
                  <Typography variant='body1' fontWeight={600}>Cargo: </Typography>
                  <Typography sx={{ pl: 1 }} variant='body2'>{user.cargo} </Typography>
                </Box>




              </Box>


            </Paper>
          </Grid>}
      </Grid>


    </Box>

  )
}
