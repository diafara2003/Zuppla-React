import { Avatar, Box, Container, Typography, Paper, Grid, TextField, FormControlLabel, Button, Link } from '@mui/material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { useForm } from '../hooks/useLogin';
import { useState } from 'react';




export default function LoginPages() {


    const { email, password, onInputChange, errorState, handleSubmit } = useForm({
        email: '', password: ''
    });



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
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Ingresar
                    </Button>
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