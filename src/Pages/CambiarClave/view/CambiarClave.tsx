import { LoadingButton } from "@mui/lab";
import { Box, Divider, Grid, Paper, TextField, Typography } from "@mui/material";
import { HeaderComponent } from '../../../SharedComponents/Header/View/HeaderComponent';
import SaveIcon from '@mui/icons-material/Save';

export const CambiarClave = () => {
    return (

        <Box display={"flex"} justifyContent={"center"} mt={2}>
            <Paper variant="outlined" elevation={0} >
                <Grid container spacing={2} p={2} width={800} >
                    <Grid item xs={12} md={12}>
                        <Typography sx={{ color: "#283340", fontWeight: '600' }} variant='h6' noWrap component='div'> Cambiar contraseña </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Typography sx={{ color: "#283340", fontWeight: '600' }} variant='subtitle1' noWrap > Usuario </Typography>
                        <Typography sx={{ color: "#283340", fontWeight: '500' }} variant='subtitle2' noWrap > jhonnatan.uruena@sinco.com.co </Typography>
                    </Grid>


                    <Grid item xs={12} mt={2}>
                        <Divider />
                    </Grid>

                    <Grid item xs={12}  mb={4}>
                        <TextField
                            size="small"
                            required
                            fullWidth
                            name="password"
                            label="Contraseña anterior"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            size="small"
                            required
                            fullWidth
                            name="password"
                            label="Contraseña nueva"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            size="small"
                            required
                            fullWidth
                            name="password"
                            label="Confirmar contraseña"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <LoadingButton
                            size="large"
                            type="submit"
                            fullWidth
                            sx={{ mt: 3, mb: 2 }}
                            loadingPosition="start"
                            variant="contained"
                            startIcon={<SaveIcon />}

                        >
                            Cambiar contraseña
                        </LoadingButton>
                    </Grid>

                </Grid>
            </Paper>
        </Box>
    )
}


export default CambiarClave;