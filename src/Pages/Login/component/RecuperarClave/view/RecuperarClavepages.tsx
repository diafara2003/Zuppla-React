import { Avatar, Box, Container, Typography, TextField, Button } from '@mui/material';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import { LoadingButton } from '@mui/lab';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { useNavigate } from 'react-router-dom';

export const RecuperarClavepages = () => {

    const navigate = useNavigate();

    return (
        <Container maxWidth="md" >
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',

                }}
            >
                <Avatar variant="circular" sx={{ m: 1, fontSize: "4rem", bgcolor: 'secondary.main', width: 60, height: 60 }}>
                    <VpnKeyOutlinedIcon sx={{
                        fontSize: "3rem"
                    }} />
                </Avatar>
                <Typography component="h1" variant="h5">
                    ¿Olvido la contraseña?
                </Typography>
                <Typography variant="body1" sx={{ color: 'rgba(8, 21, 36, 0.38);' }}>
                    No te preocupes, te enviaremos las instrucciones para cambiar la clave
                </Typography>
                <Box component="form" noValidate sx={{ mt: 3 }} >

                    <TextField
                        required
                        fullWidth
                        id="email"
                        label="Correo electronico"
                        name="email"
                        autoComplete="email"
                    />

                    <LoadingButton
                        size="large"
                        type="submit"
                        fullWidth
                        sx={{ mt: 3, mb: 2 }}
                        loadingPosition="start"
                        variant="contained"


                    >
                        Resetear Contraseña
                    </LoadingButton>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button onClick={()=>{
                              navigate('/login', { replace: true })
                        }}>
                            <KeyboardBackspaceOutlinedIcon />
                            Regresar
                        </Button>
                    </Box>

                </Box>
            </Box>
        </Container>
    )
}


export default RecuperarClavepages;