import { LoadingButton } from "@mui/lab";
import { Card, CardHeader, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography, CardContent, CardActions, Box } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useCambiarClave } from "../hook/useCambiarClave";
import { AlertPortal } from '../../../../../SharedComponents/Alert/View/AlertPortal';
import { Fondo } from '../../../../../SharedComponents/Fondo/view/Fondo';

export const CambiarClavePage = () => {

    const { PassNew, PassNewR, PassOld, handleSubmit, onInputChange,
        handleShowPassword, showPass, isLoading, stateAlert
    } = useCambiarClave();


    return (
        <Box>
            <Grid item xs={12} mt={1} position="absolute" mr={2}>
                <Fondo />
            </Grid>
            <Grid container justifyContent={"center"} position={"relative"} top={79} >
                {stateAlert.estado ? <AlertPortal /> : null}
                <Grid item xs={6}>
                    <Card>
                        <CardHeader title={<Typography variant='body1'>Cambiar contraseña</Typography>} />
                        <CardContent>
                            <Grid container spacing={2}>
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

                            </Grid>
                        </CardContent>
                        <CardActions>
                            <Box display={"flex"} justifyContent={"end"} width={"100%"}>
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
                            </Box>
                        </CardActions>
                    </Card>
                </Grid>


            </Grid>
        </Box>
    )
}


export default CambiarClavePage;