import { Avatar, Box, Container, Typography, Paper, Grid, TextField, FormControlLabel, Button, Link } from '@mui/material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { useForm } from '../hooks/useLogin';

export default function LoginPages() {

    const { formState, onInputChange } = useForm({
        email: '', password: ''
    });

    const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        const hasError = !emailRegexp.test(formState.email);


        console.log(formState,hasError);
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
                                required
                                fullWidth
                                id="email"
                                onChange={onInputChange}
                                value={formState.email}
                                label="Correo electronico"
                                name="email"
                            // autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Contraseña"
                                onChange={onInputChange}
                                value={formState.password}
                                type="password"
                                id="password"
                            // autoComplete="new-password"
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