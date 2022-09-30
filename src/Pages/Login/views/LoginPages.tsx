import { Avatar, Box, Container, Typography, Paper, Grid, TextField, FormControlLabel, Button, Link, Snackbar } from '@mui/material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { useForm } from '../hooks/useLogin';
import LoadingButton from '@mui/lab/LoadingButton';

export default function LoginPages() {


    const { email, password, onInputChange, errorState, handleSubmit, isLoading, errorMessage } = useForm({
        email: '', password: ''
    });



    const handleClose = () => {

    };
    return (

        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',

                }}
            >

                <Avatar variant="circular" sx={{ m: 1, fontSize: "4rem", bgcolor: 'secondary.main', width: 60, height: 60 }}>
                    <AccountCircleRoundedIcon sx={{
                        fontSize: "4rem"
                    }} />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Iniciar sesión
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField

                                error={errorState.email.hasError}
                                helperText={errorState.email.msn}
                                required
                                fullWidth
                                id="email"
                                onChange={onInputChange}
                                value={email}
                                label="Correo electronico"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                error={errorState.password.hasError}
                                helperText={errorState.password.msn}
                                required
                                fullWidth
                                name="password"
                                label="Contraseña"
                                onChange={onInputChange}
                                value={password}
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                        </Grid>

                    </Grid>


                    <LoadingButton
                        size="large"
                        type="submit"
                        fullWidth
                        sx={{ mt: 3, mb: 2 }}
                        loadingPosition="start"
                        variant="contained"
                        loading={isLoading}
                    >
                        Ingresar
                    </LoadingButton>

                    {errorMessage == "" ? null :
                        <Snackbar
                            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                            open={true}
                            autoHideDuration={4000}
                            onClose={handleClose}
                            message={errorMessage}
                            key={"bottom" + "right"}
                        />
                    }



                    <Grid container sx={{ display: "none" }}>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                ¿Recordar contraseña?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"¿Aun no estas registrado?"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

        </Container>
    );
}

function setState(arg0: any) {
    throw new Error('Function not implemented.');
}
