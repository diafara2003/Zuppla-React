import { Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, InputAdornment, LinearProgress, TextField, Typography } from '@mui/material'
import { HeaderComponent } from '../../../../../SharedComponents/Header'
import SearchIcon from '@mui/icons-material/Search';
import { Add } from '@mui/icons-material';
import HistoryIcon from '@mui/icons-material/History';
import { useUsuario } from '../hook/useUsuario';
import TableUsuario from '../components/view/TableUsuario';
import { Eliminar } from '../../../../GestionProveedores/Components/ImgComponents/View/Eliminar';
import { ActionUser } from '../model/usuarioDTO';
import { SkeletonDinamic } from '../../../../GestionProveedores/Components/SkeletonComp/View/SkeletonDinamic';
import { AlertPortal } from '../../../../../SharedComponents/Alert/View/AlertPortal';
import { useState } from 'react';
import { FrmNewUser } from '../components/view/FrmNewUser';

export const UsuarioPages = () => {

    const { data, isLoading, dataUserSelect, alertData, handleCloseDelete, openDelete, handleDeleteUser, actionUser,setDataNewUser } = useUsuario();
    const [openD, setOpen] = useState(false);
    const handleClickDialogOpen = () => {
        setOpen(true);
    };   
    return (

        <>
            <HeaderComponent title={"Usuarios"} />
            {
                isLoading ?
                    <Box mt={6}>
                        <SkeletonDinamic NoColumnas={1} NoFilas={4} Tipo={'TABLE'} />
                    </Box>
                    :
                    <Box sx={{ m: '1px', background: 'white', height: 'calc(100vh - 150px)', mr: "10px", ml: '10px' }}>
                        <AlertPortal data={alertData} />

                      
                    </Box>

            }
            {/* Dialog insercion */}
            {/* <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth={"md"}
            >
                <DialogTitle id="alert-dialog-title">
                    Nuevo usuario
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" onClick={handleClose} >Cancelar</Button>
                    <Button variant="contained" color="primary" onClick={handleClose} autoFocus >
                        Guardar
                    </Button>
                </DialogActions>
            </Dialog> */}
            <FrmNewUser open={openD}
                newUser={(dataUser) => {
                    console.log(dataUser)
                    setDataNewUser(dataUser)
                    actionUser(ActionUser.New);                 
                }}
                close={(close) => {
                    setOpen(close);
                }} />


            {/* Dialog de eliminacion */}
            <Dialog
                open={openDelete}
                onClose={handleCloseDelete}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth={"md"}
            >
                <DialogTitle id="alert-dialog-title" justifyContent={'center'} display={"flex"}>
                    <Typography>  Eliminar usuario </Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Box justifyContent={'center'} display={"flex"}>
                            <Eliminar />
                        </Box>
                        <Typography>¿Esta seguro que desea eliminar este usuario?</Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="text" onClick={handleCloseDelete} >Cancelar</Button>
                    <Button variant="contained" color="error" onClick={handleDeleteUser} autoFocus >
                        Eliminar
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
