import { LoadingButton } from "@mui/lab";
import { Divider, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, TextField, Typography } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useCambiarClave } from "../hook/useCambiarClave";
import { AlertPortal } from '../../../SharedComponents/Alert/View/AlertPortal';

export const CambiarClave = () => {

    const { PassNew, PassNewR, PassOld, handleSubmit, onInputChange,
        handleShowPassword, showPass, isLoading, stateAlert
    } = useCambiarClave();

    return (

        <Grid container direction="row" justifyContent="center" mt={2}>

            {stateAlert.estado ? <AlertPortal /> : null}

            <Grid item md={5} xs={12} lg={4} xl={3}>
                <Paper variant="outlined" elevation={0} >
                    <Grid container spacing={2} p={2}   >
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

                        <Grid item xs={12} mb={4}>
                            <FormControl sx={{ width: '100%' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Contraseña anterior</InputLabel>
                                <OutlinedInput
                                    size="small"
                                    required
                                    fullWidth
                                    name="PassOld"
                                    label="Contraseña anterior"
                                    value={PassOld}
                                    id="password"
                                    onChange={onInputChange}
                                    autoComplete="new-password"
                                    type={showPass.showPassOld ? 'text' : 'password'}

                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => handleShowPassword("showPassOld")}
                                                onMouseDown={() => handleShowPassword("showPassOld")}
                                                edge="end"
                                            >
                                                {showPass.showPassOld ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }

                                />
                            </FormControl>

                        </Grid>
                        <Grid item xs={12}>
                            <FormControl sx={{ width: '100%' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Contraseña nueva</InputLabel>
                                <OutlinedInput
                                    size="small"
                                    required
                                    fullWidth
                                    name="PassNew"
                                    label="Contraseña nueva"
                                    onChange={onInputChange}
                                    value={PassNew}
                                    id="password"
                                    autoComplete="new-password"
                                    type={showPass.showPassNew ? 'text' : 'password'}

                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => handleShowPassword("showPassNew")}
                                                onMouseDown={() => handleShowPassword("showPassNew")}
                                                edge="end"
                                            >
                                                {showPass.showPassNew ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }

                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl sx={{ width: '100%' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Confirmar contraseña nueva</InputLabel>
                                <OutlinedInput
                                    size="small"
                                    required
                                    fullWidth
                                    name="PassNewR"
                                    label="Confirmar contraseña nueva"
                                    onChange={onInputChange}
                                    value={PassNewR}
                                    id="password"
                                    autoComplete="new-password"
                                    type={showPass.showPassNewR ? 'text' : 'password'}

                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => handleShowPassword("showPassNewR")}
                                                onMouseDown={() => handleShowPassword("showPassNewR")}
                                                edge="end"
                                            >
                                                {showPass.showPassNewR ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }

                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <LoadingButton
                                size="large"
                                type="submit"
                                fullWidth
                                sx={{ mt: 3, mb: 2 }}
                                loading={isLoading}
                                onClick={handleSubmit}
                                loadingPosition="start"
                                variant="contained"
                                startIcon={<SaveIcon />}

                            >
                                Cambiar contraseña
                            </LoadingButton>
                        </Grid>

                    </Grid>
                </Paper>
            </Grid>


        </Grid>
    )
}


export default CambiarClave;