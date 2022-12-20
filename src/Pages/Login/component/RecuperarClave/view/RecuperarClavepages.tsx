import { Avatar, Box, Container, Typography, TextField, Button, Snackbar } from '@mui/material';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import { LoadingButton } from '@mui/lab';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { useNavigate } from 'react-router-dom';
import { useRecuperarClave } from '../hook/useRecuperarClave';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export const RecuperarClavepages = () => {

    const navigate = useNavigate();
    const { isLoading, handleRecordarClave, onInputChange, stateCorreo, email, showAlert, stateAlert } = useRecuperarClave();
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
                <Typography component="h1" variant="h5" sx={{ mt: 2 }}>
                    ¿Olvido la contraseña?
                </Typography>
                <Typography variant="body1" sx={{ color: 'rgba(8, 21, 36, 0.38);' }}>
                    No te preocupes, te enviaremos las instrucciones para recordar tu clave
                </Typography>
                <Box component="form" onSubmit={handleRecordarClave} noValidate sx={{ mt: 5 }} >

                    <TextField
                        error={email.hasError}
                        helperText={email.msn}
                        required
                        fullWidth
                        id="email"
                        onChange={onInputChange}
                        value={stateCorreo}
                        label="Correo electronico"
                        name="email"
                        autoComplete="email"
                    />

                    <LoadingButton
                        size="large"
                        type="submit"
                        fullWidth
                        loading={isLoading}
                        sx={{ mt: 3, mb: 2 }}
                        loadingPosition="start"
                        variant="contained"
                        startIcon={<EmailOutlinedIcon />}

                    >
                        Recordar contraseña
                    </LoadingButton>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button onClick={() => {
                            navigate('/login', { replace: true })
                        }}>
                            <KeyboardBackspaceOutlinedIcon />
                            Regresar
                        </Button>
                    </Box>

                </Box>
            </Box>
            {showAlert ?
                <Snackbar
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    open={true}
                    autoHideDuration={4000}
                    onClose={() => { stateAlert(false) }}
                    message="Se envió un correo con las instrucciones para recordar la contraseña"
                    key={"bottom" + "right"}
                /> : null
            }
        </Container>
    )
}


export default RecuperarClavepages;