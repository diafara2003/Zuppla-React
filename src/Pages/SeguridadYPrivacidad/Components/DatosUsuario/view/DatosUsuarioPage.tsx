import { LoadingButton } from '@mui/lab';
import { Box, Card, CardActions, CardContent, CardHeader, Grid, TextField, Typography } from '@mui/material';
import { Fondo } from '../../../../../SharedComponents/Fondo';
import SaveIcon from '@mui/icons-material/Save';

export const DatosUsuarioPage = () => {
  return (

    <Grid item xs={8} mt={4}>
      <Grid item xs={8} >
        <Fondo />
      </Grid>
      <Card sx={{ zIndex: 99 }}>
        <CardHeader title={<Typography variant='body1'>Mis datos personales</Typography>} />
        <CardContent>

          <Grid container spacing={2} p={2}>

            <Grid item xs={6} >
              <TextField
                id="txtPaginaWeb"
                label="Nombres"
                // onChange={onInputChange}
                name="nombre"
                // value={dataInitialState.paginaWeb}
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={6} >
              <TextField
                id="txtPaginaWeb"
                label="Documento de identidad"
                // onChange={onInputChange}
                name="nombre"
                // value={dataInitialState.paginaWeb}
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={6} >
              <TextField
                id="txtPaginaWeb"
                label="Cargo"
                // onChange={onInputChange}
                name="nombre"
                // value={dataInitialState.paginaWeb}
                fullWidth
                size="small"
              />
            </Grid>

            <Grid item xs={6} >
              <TextField
                id="txtPaginaWeb"
                label="Correo electronico"
                // onChange={onInputChange}
                name="nombre"
                // value={dataInitialState.paginaWeb}
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={6} >
              <TextField
                id="txtPaginaWeb"
                label="Celular"
                // onChange={onInputChange}
                name="nombre"
                // value={dataInitialState.paginaWeb}
                fullWidth
                size="small"
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Box display={"flex"} justifyContent={"end"} width={"100%"}>
            <LoadingButton
              type="submit"
              loadingPosition="end"
              variant="contained"
              // onClick={handleGuardar}
              // loading={isSaving}
              endIcon={<SaveIcon />}>Guardar</LoadingButton>
          </Box>
        </CardActions>
      </Card>

    </Grid>
  )
}

export default DatosUsuarioPage;