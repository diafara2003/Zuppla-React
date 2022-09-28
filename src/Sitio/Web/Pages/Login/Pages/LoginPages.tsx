import { Avatar, Box, Container, Typography, Paper, Grid, TextField, FormControlLabel, Button, Link } from '@mui/material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

export default function LoginPages() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
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

                <Avatar variant="circular" sx={{ m: 1, fontSize: "4rem", bgcolor: 'secondary.main',  width: 60, height: 60 }}>
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
                                required
                                fullWidth
                                id="email"
                                label="Correo electronico"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Contraseña"
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