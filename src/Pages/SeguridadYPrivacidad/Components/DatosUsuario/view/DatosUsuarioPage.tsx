import { LoadingButton } from '@mui/lab';
import { Box, Card, CardActions, CardContent, CardHeader, Grid, TextField, Typography } from '@mui/material';
import { Fondo } from '../../../../../SharedComponents/Fondo';
import SaveIcon from '@mui/icons-material/Save';
import { useDatosUsuario } from '../hook/useDatosUsuario';
import { AlertPortal } from '../../../../../SharedComponents/Alert';

export const DatosUsuarioPage = () => {

  const { cargo, celular, documento, nombre, correo, onInputChange, handleSubmit, validation,stateAlert} = useDatosUsuario();

  return (
    <Box>

      <Grid item xs={12} mt={1} position="absolute" mr={2}>
        <Fondo />
      </Grid>

      <Grid container justifyContent={"center"} position={"relative"} top={79} >
      {stateAlert.estado ? <AlertPortal /> : null}
        <Grid item xs={6}>

          <Card>
            <CardHeader title={<Typography variant='body1'>Mis datos personales</Typography>} />
            <CardContent>

              <Grid container spacing={2} p={2}>

                <Grid item xs={6} >
                  <TextField
                    id="txtPaginaWeb"
                    label="Nombres"
                    name="nombre"
                    fullWidth
                    size="small"
                    error={validation.nombre.hasError}
                    helperText={validation.nombre.msn}
                    onChange={onInputChange}
                    value={nombre}
                  />
                </Grid>
                <Grid item xs={6} >
                  <TextField
                    id="txtPaginaWeb"
                    label="Documento de identidad"
                    name="documento"
                    error={validation.documento.hasError}
                    helperText={validation.documento.msn}
                    onChange={onInputChange}
                    value={documento}
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={6} >
                  <TextField
                    id="txtPaginaWeb"
                    label="Cargo"
                    name="cargo"
                    error={validation.cargo.hasError}
                    helperText={validation.cargo.msn}
                    onChange={onInputChange}
                    value={cargo}
                    fullWidth
                    size="small"
                  />
                </Grid>

                <Grid item xs={6} >
                  <TextField
                    id="txtPaginaWeb"
                    label="Correo electronico"
                    name="correo"
                    error={validation.email.hasError}
                    helperText={validation.email.msn}
                    onChange={onInputChange}
                    value={correo}
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={6} >
                  <TextField
                    id="txtPaginaWeb"
                    label="Celular"
                    name="celular"
                    error={validation.celular.hasError}
                    helperText={validation.celular.msn}
                    onChange={onInputChange}
                    value={celular}
                    fullWidth
                    size="small"
                  />
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Box display={"flex"} justifyContent={"end"} width={"100%"}>
                <LoadingButton
                  onClick={handleSubmit}
                  type="submit"
                  loadingPosition="end"
                  variant="contained"
                  endIcon={<SaveIcon />}>Guardar</LoadingButton>
              </Box>
            </CardActions>
          </Card>

        </Grid>
      </Grid>


    </Box>
  )
}

export default DatosUsuarioPage;